var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieDetailsSchema = new Schema({
  Title: String,
  Poster: String,
  Year: String,
  imdbID: String,
  Type: String,
  genre: String,
  comments: String
});

movieDb=mongoose.model('MovieDetails',MovieDetailsSchema);
module.exports = movieDb;
