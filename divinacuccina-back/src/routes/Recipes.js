const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todas las habitaciones
router.get('/', async (req, res) => {
  try {
    // Primero obtenemos todas las habitaciones
    const [recipes] = await db.query('SELECT * FROM recipes');

    // Por cada habitación, obtener sus imágenes
    const recipesWithPic = await Promise.all(
      recipes.map(async (recipe) => {
        const [imagenes] = await db.query(
          'SELECT url_imagen FROM imagenes_recipes WHERE recipe_id = ?',
          [recipe.id]
        );
        return {
          ...recipe,
          imagenes: imagenes.map(img => img.url_imagen) // Listado de URLs
        };
      })
    );

    res.json(recipesWithPic);
  } catch (error) {
    console.error('Error to GET /recipes:', error.message);
    res.status(500).json({ error: 'Error to GET recipes' });
  }
});


// Obtener una habitación por ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM recipes WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Recipe not found' });
    const [images] = await db.query('SELECT url_imagen FROM imagenes_recipes WHERE recipe_id = ?', [req.params.id]);
    res.json({
      ...rows[0],
      imagenes: images.map(img => img.url_imagen)
    });
  } catch (error) {
    console.error('Error to GET /recipes:', error);
    res.status(500).json({ error: 'Error to GET Recipes' });
  }
});

// Obtener una habitación por ID
router.get('/', async (req, res) => {
  try {
    const termino = req.query.q; // El texto del buscador: /?q=pasta

    if (!termino) {
      return res.status(400).json({ error: 'Parámetro de búsqueda "q" es requerido' });
    }

    const [rows] = await db.query(
      'SELECT * FROM recipes WHERE name_recipe LIKE ?',
      [`%${termino}%`] // Búsqueda parcial
    );

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron recetas asociadas' });
    }

    // Obtener imágenes para cada receta
    const recetasConImagenes = await Promise.all(
      rows.map(async (receta) => {
        const [imagenes] = await db.query(
          'SELECT url_imagen FROM imagenes_recipes WHERE recipe_id = ?',
          [receta.id]
        );
        return {
          ...receta,
          imagenes: imagenes.map(img => img.url_imagen)
        };
      })
    );

    res.json(recetasConImagenes);

  } catch (error) {
    console.error('Error al hacer búsqueda:', error);
    res.status(500).json({ error: 'Error al realizar la búsqueda de recetas' });
  }
});


// Crear una nueva habitación
router.post('/', async (req, res) => {
  const { name_recipe, tipo, description, price, time, status } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO recipes (name_recipe, tipo, description, price, time, status) VALUES (?, ?, ?, ?, ?, ?)',
      [name_recipe, tipo, description, price, time, status]
    );
    res.json({ id: result.insertId, message: 'Recipe successfully created' });
  } catch (error) {
    res.status(500).json({ error: 'Error on recipe insert' });
  }
});

// Actualizar habitación
router.put('/:id', async (req, res) => {
  const { name_recipe, tipo, description, price, time, status } = req.body;
  try {
    await db.query(
      'UPDATE recipes SET name_recipe = ?, tipo = ?, description = ?, price = ?, time = ?, status = ? WHERE id = ?',
      [name_recipe, tipo, description, price, time, status, req.params.id]
    );
    res.json({ message: 'Recipe successfully created' });
  } catch (error) {
    res.status(500).json({ error: 'Error at updating' });
  }
});

// Eliminar habitación
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM recipes WHERE id = ?', [req.params.id]);
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error at deleting recipe' });
  }
});

module.exports = router;
