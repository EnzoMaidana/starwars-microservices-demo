const Character = require('../data');
const {response} = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    const {data} = await axios.get("http://database:3004/Character")
    console.log('Esto es characters', data[0])
    response(res, 200, data);
};

