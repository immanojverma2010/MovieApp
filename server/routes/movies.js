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
var movieData=new favmovie(req.body);
  movieData.save(function(err){
    if(err){
      res.send(err);
    }
    else{
      res.send("Your movie data is saved");
    }
  });
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
router.route("/updatemovies/:title")
  .put( function (req, res) {
    //console.log(req.params.title);
    //console.log(req.body.imdbID);
      favmovie.update({Title:req.params.title}, {imdbID:req.body.imdbID },function (err){
          if(err){
            console.log(err);
          }
          else{
              console.log("Movie Updated");
            favmovie.find({},{__v:false, _id:false}, function(err,data) {
              if(err){
                throw err;
              }
              else{

                //console.log(data);
                res.json(data)
              }

            });
          }
});
});

/* DELETE movies listing. by params */
router.route("/deletemovies/:title")
  .delete( function (req, res){
    favmovie.remove({"Title":req.params.title},function(err,result){
      if(err){
        console.log(err);
      }
      else{
          console.log("Movie Updated");
        favmovie.find({},{__v:false, _id:false}, function(err,data) {
          if(err){
            throw err;
              }
          else{
            //console.log(data);
            res.json(data)
          }

    });
  }
});
});
module.exports = router;
