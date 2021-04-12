const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak-floating-paradise.gouqp.mongodb.net/FLOATING-PARADISE?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var BookingSchema = new Schema({
    bookpersonname : String,
    bookpersonemail : String,
    bookhouseboatid : String,
    booktype : String,
    noofpersons : String,
    date : String
});

var BookingData = mongoose.model('booking', BookingSchema);

module.exports = BookingData;