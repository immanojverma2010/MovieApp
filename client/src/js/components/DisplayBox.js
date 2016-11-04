var React= require('react');
var MovieDisplayLayout=require("../components/MovieDisplayLayout.js");


var DisplayBox= React.createClass({
  render: function(){
    if(this.props.movieObj.length==0){
    return(
      <div>
  No movie Found
      </div>
    );

  }

  else{
var movieObjArr=this.props.movieObj.map(function(movie){
return(<MovieDisplayLayout movieObject={movie} year={movie.Year} title={movie.Title} imdbID={movie.imdbID} poster={movie.Poster}/>);

});

    return(
      <div className="container">
      {movieObjArr}
      </div>
    );
  }
}
});

module.exports=DisplayBox;
