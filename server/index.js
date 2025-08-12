import express from 'express';
import { loadAllData } from './seeders/loadData.js';

const app = express();
const PORT = 3000;

// Endpoint para cargar datos desde CSV
app.get('/load-data', async (req, res) => {
  try {
    await loadAllData();
    res.send(' Datos cargados correctamente desde CSV.');
  } catch (err) {
    res.status(500).send('Error cargando datos.');
  }
});

app.listen(PORT, () => {
  console.log(` Servidor escuchando en http://localhost:${PORT}`);
});
