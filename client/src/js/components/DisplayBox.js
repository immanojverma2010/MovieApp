var React= require('react');
var MovieDisplayLayout=require("../components/MovieDisplayLayout.js");


var DisplayBox= React.createClass({
  render: function(){
    var movieObjArr=this.props.movieObj.map(function(movie){
return(<MovieDisplayLayout movieObject={movie} />);

});

    return(
      <div className="container">
      {movieObjArr}
      </div>
    );
  }

});

module.exports=DisplayBox;
