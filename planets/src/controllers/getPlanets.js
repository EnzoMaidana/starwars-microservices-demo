const Planet = require('../data');
const { response } = require('../utils');
const axios = require('axios')

module.exports = async (req, res) => {
    const {data} = await axios.get("http://database:3004/Planet")
    response(res, 200, data);
};

