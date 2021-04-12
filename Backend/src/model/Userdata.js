const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak-floating-paradise.gouqp.mongodb.net/FLOATING-PARADISE?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : String,
    email : String,
    pwd : String
});

var UserData = mongoose.model('user', UserSchema);

module.exports = UserData;