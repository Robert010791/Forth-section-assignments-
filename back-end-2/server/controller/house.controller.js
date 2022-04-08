const houses = require('../db.json');
let id = houses.length + 1;

const getAllHouses = (req, res) => {
  console.log('test');
  res.status(200).send(houses);
};

//
//
//
//

const createHouse = (req, res) => {
  const { address, price, imageURL } = req.body;

  const newHouse = {
    id,
    address,
    price,
    imageURL,
  };
  houses.push(newHouse);

  id++;

  res.status(200).send(houses);
};
//
//
//
//
//
//
//
//
const updateHouse = (req, res) => {
  const houseToBeUpdatedID = +req.params.id;
  const { type } = req.body;

  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];
    if (house.id === houseToBeUpdatedID) {
      if (type === 'plus') {
        house.price += 10000;
      } else {
        house.price -= 10000;
      }
      return res.status(200).send(houses);
    }
  }

  return res.status(400).send(houses);
  console.log(req.body);
  console.log(req.params);
};
//
//
//
//
//
//
//
const deleteHouse = (req, res) => {
  const housesToBeDeletedID = +req.params.id;

  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];
    if (house.id === housesToBeDeletedID) {
      houses.splice(i, 1);
      return res.status(200).send(houses);
    }
  }
  res.status(400).send(houses);
};

const exportsObj = {
  getAllHouses,
  deleteHouse,
  createHouse,
  updateHouse,
};

module.exports = exportsObj;
