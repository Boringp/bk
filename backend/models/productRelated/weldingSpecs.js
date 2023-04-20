const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const weldingSpecsSchema = new Schema({
    model: {type: String, },
    technology: {type: String, },
    powerSupply: {type: String, },
    powerConsumption: {type: String,},
    noLoadVoltage: {type: String, },
    weldingCurrent: {type: String, },
    efficiency: {type: String, },
    weldingRodSize: {type: String},
    dimensions: {type: String, },
    weight: {type: String, },
    accessories: {type: String, },
    origin: {type: String, },
    _id: false // Disables default Mongoose id generation
});

module.exports = weldingSpecsSchema;