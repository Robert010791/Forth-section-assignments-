const PORT = 4004;

const express = require('express');
const cors = require('cors');
const app = express();
const {
  getAllHouses,
  deleteHouse,l
  createHouse,
  updateHouse,
} = require('./controller/house.controller');

app.use(cors());
app.use(express.json());

app.get('/api/houses', getAllHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
