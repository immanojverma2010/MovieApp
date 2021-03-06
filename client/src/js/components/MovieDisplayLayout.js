var React= require('react');

var MovieDisplayLayout= React.createClass({

addMovie(){
/*addMovie: function(){}*/
  alert('Entering- Adding movie');
  var url="http://localhost:8080/movies/favmovies";
  var AddObject=this.props.movieObject;

  $.ajax({
    url:url,
    type:'POST',
    data:AddObject,
    success: function(data){
      alert(data);
      console.log("movie added" +data);
    }.bind(this),

    error: function(err){
      console.log(err);
    }.bind(this)

  });
},

  render: function(){
    link="http://www.imdb.com/title/"+this.props.movieObject.imdbID;
    return(
      <div>
      <div className="row">
      <div className="col-lg-4">
      <h1>{this.props.movieObject.Title}</h1>
      <img src={this.props.movieObject.Poster} alt="Poster Image" height="400" width="300" style={{marginTop:'20'}}></img>
      </div>

      <div className="col-lg-8" >
      <br></br>    <br></br>     <br></br>     <br></br>
      <br></br>     <br></br>       <br></br>      <br></br>
      <br></br>     <br></br>       <br></br>      <br></br>
      <br></br>     <br></br>       <br></br>      <br></br>
      <br></br>     <br></br>
    <h3>Year of Release:  {this.props.movieObject.Year}</h3>
    <a href={link} className="btn btn-primary" target="_blank"><span className="glyphicon glyphicon-share-alt"></span> See on IMDB</a>&nbsp;&emsp;
    <button onClick={this.addMovie} className="btn btn-warning"><span className="glyphicon glyphicon-star"></span> Add as favourite</button>
    </div>
    </div><br></br><hr></hr>
    </div>
    );
  }
});

module.exports=MovieDisplayLayout;
