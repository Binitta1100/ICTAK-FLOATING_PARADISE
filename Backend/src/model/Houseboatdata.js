const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak-floating-paradise.gouqp.mongodb.net/FLOATING-PARADISE?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewHouseboatSchema = new Schema({
    houseboatid : String,
    type : String,
    desc : String,
    rate : String,
    img : String
});

var HouseboatData = mongoose.model('houseboat', NewHouseboatSchema);

module.exports = HouseboatData;