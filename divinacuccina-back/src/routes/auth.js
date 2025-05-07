const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const SECRET_KEY = 'clave123232'; // clave secreta

// Registro de usuario
router.post('/register', async (req, res) => {
  const { nombre, correo, password, rol } = req.body;

  try {
    const [existe] = await db.execute('SELECT id FROM users WHERE correo = ?', [correo]);
    if (existe.length > 0) {
      return res.status(400).json({ error: 'Este correo ya está registrado' });
    }else{
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.execute(
          'INSERT INTO users (nombre, correo, password, rol) VALUES (?, ?, ?, ?)',
          [nombre, correo, hashedPassword, rol || 'cliente']
        );
    
        res.status(201).json({ message: 'Usuario registrado correctamente' });
    }
    
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error en el registro' });
  }
});

// Login de usuario
router.post('/login', async (req, res) => {
//hash manual de contraseña
//     const bcrypt = require('bcrypt');

// (async () => {
//   const hash = await bcrypt.hash('admin123', 10);
//   console.log(hash);
// })();

  const { correo, password } = req.body;

  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE correo = ?', [correo]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    console.log(match)

    if (!match) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: user.id, rol: user.rol }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: 'Login exitoso', token, user: { id: user.id, nombre: user.nombre, rol: user.rol } });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error en el login' });
  }
});

module.exports = router;
