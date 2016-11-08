var express = require('express');
var router = express.Router();
var favmovie= require('../models/favmovie')

/* GET movies listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Fetching data through collection
  router.route("/savedmovies")
    .get(function(req,res){
 var result=[];
var cursor=db.collection('moviedetails').find({},{__v:false, _id:false});
    cursor.forEach(function(data,err){
      if(err){
        console.log(err);
      }
      result.push(data);

    },function(){
      console.log(result);
      res.json(result);

    });
    //if we pass value here rather than upper function forEach will be consider as call  back and it will send the data before inserting into result array
    //so thats why we commented the below code
    /*
    res.json(result);
    */
    });


/*
// Fetching data through schema
  router.route("/savedmovies")
    .get(function(req,res){
      favmovie.find({},{__v:false, _id:false}, function(err,data) {
        if(err){
          throw err;
        }
        else{
          console.log(data);
          res.json(data)
        }
      });
    });
*/


/* POST movies listing. */
router.route("/favmovies")
  .post(function(req,res){
if(req.body){
  req.body.comments="No comments yet....(Default movie comments)"
  var movieData=new favmovie(req.body);
  console.log(movieData.imdbID);
  favmovie.findOne({imdbID:movieData.imdbID},{imdbID:true},function(err,data) {
    if(err){
      throw err;
    }
    if(data){
     res.send("this movie is already present in your favourites");
    }
    else{

      console.log(data);

        movieData.save(function(err){
          if(err){
            res.send(err);
          }
          else{
            res.send("Your movie data is saved");
          }
        });

    }
  })
  }
});


/*
// for displaying data on console
router.post('/s', function(req, res, next) {
  console.log(req.body.Search[0]);
  console.log(req.body);
  res.send('respond with a resource');
});
*/


/* PUT movies listing. */
router.route("/updatemovies")
  .put( function (req, res) {
    //console.log(req.params.title);
    //console.log(req.body.imdbID);
      favmovie.update({imdbID:req.body.imdbID}, {comments:req.body.comments },function (err){
          if(err){
            console.log(err);
          }
          else{
              console.log("Movie Updated");
              res.send("Comments Updated")
            /*favmovie.find({},{__v:false, _id:false}, function(err,data) {
              if(err){
                throw err;
              }
              else{

                //console.log(data);
                res.json(data)
              }

            });
            */
          }
});
});

/* DELETE movies listing. by params */
router.route("/deletemovies/:imdbID")
  .delete( function (req, res){
    favmovie.remove({"imdbID":req.params.imdbID},function(err,result){
      if(err){
        console.log(err);
      }
      else{
          console.log("Movie Deleted");
/*
        favmovie.find({},{__v:false, _id:false}, function(err,data) {
          if(err){
            throw err;
              }
          else{
            //console.log(data);
            res.json(data)
          }

    });
    */
    res.send("movie deleted")
  }
});
});
module.exports = router;
