var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userDetailsSchema = new Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('UserDetails',userDetailsSchema);
