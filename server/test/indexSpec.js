var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing GET route", function(err){
  it("should handle the request", function(done){
    url
        .get("/movies")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");
          res.text.should.be.equal("respond with a resource");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("getmovies route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .get("/movies/savedmovies")
       .expect(200)
       .expect('Content-Type',/json/)
       .end(function(err,res){
         should.not.exist(err);
         var myObj=JSON.parse(res.text);
         myObj[0].imdbID.should.be.equal('tt0944947');
         done();
       });

 });
});

describe.skip("Testing the POST route", function(err){
 it("add request", function(done){
   url
       .post("/movies/favmovies")
       .expect(200)
       .send({
         "Title":"Batman Begins",
         "Year":"2005",
         "imdbID":"tt0372784",
         "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"
      })
     .end(function(err,res){
       if (err) {
                      throw err;
              }
       //expect(res.text).to.be.equal("Hello!");
       res.text.should.be.equal("Your movie data is saved");
       //assert(res.text == "Hello!","Test has failed");
       done();
     });
});
});

describe("Testing the UPDATE route", function(err){
 it("update request", function(done){
   url
       .put("/movies/updatemovies")
       .expect(200)
       .send({
         "imdbID":"tt4832640",
         "comments":"Good movie of salman!!"

      })
     .end(function(err,res){
       if (err) {
                      throw err;
              }
       //expect(res.text).to.be.equal("Hello!");
       res.text.should.be.equal("Comments Updated");
       //assert(res.text == "Hello!","Test has failed");
       done();
     });
});
});

describe.skip("Testing the DELETE route", function(err){
 it("update request", function(done){
   url
       .delete("/movies/deletemovies/tt0383216")
       .expect(200)

     .end(function(err,res){
       if (err) {
                      throw err;
              }
       //expect(res.text).to.be.equal("Hello!");
       res.text.should.be.equal("movie deleted");
       //assert(res.text == "Hello!","Test has failed");
       done();
     });
});
});
