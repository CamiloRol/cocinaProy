const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const recipesRoutes = require('./routes/recipes');
const usuariosRoutes = require('./routes/auth');
//const reservasRoutes = require('./src/routes/reservas');
//const pagosRoutes = require('./src/routes/pagos');

const app = express();
app.use(cors());
app.use(express.json());

// Usar rutas
app.use('/api/recipes', recipesRoutes);
app.use('/api/auth', usuariosRoutes);
//app.use('/api/reservas', reservasRoutes);
//app.use('/api/pagos', pagosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
