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
      console.log("movie added" +data);
    }.bind(this),

    error: function(err){
      console.log(err);
    }.bind(this)

  });
},

  render: function(){
    link="http://www.imdb.com/title/"+this.props.imdbID
    return(
      <div>
      <div className="row">
      <div className="col-lg-4">
      <h1>{this.props.title}</h1>
      <img src={this.props.poster} alt="Poster Image" height="400" width="300" style={{marginTop:'20'}}></img>
      </div>

      <div className="col-lg-8" >
      <br></br>    <br></br>     <br></br>     <br></br>
      <br></br>     <br></br>       <br></br>      <br></br>
      <br></br>     <br></br>       <br></br>      <br></br>
      <br></br>     <br></br>       <br></br>      <br></br>
      <br></br>     <br></br>
    Year of Release:  <h3>{this.props.year}</h3>
    <a href={link} className="btn btn-primary" target="_blank">see on IMDB</a>&nbsp;&emsp;
    <button onClick={this.addMovie} className="btn btn-warning">Add as favourite</button>
    </div>
    </div><br></br><hr></hr>
    </div>
    );
  }
});

module.exports=MovieDisplayLayout;
