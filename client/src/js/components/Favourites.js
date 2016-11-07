var React= require('react');
var SavedMovieLayout=require('../components/SavedMovieLayout.js');
var Favourites= React.createClass({



componentDidMount: function(){

url="http://localhost:8080/movies/savedmovies"
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'JSON',

    success: function(data)
    {
      alert(data);
      alert("Getting Data from DataBase");
      this.setState({savedMovies:data});
      alert("data set");
    }.bind(this),

    error: function(err)
    {
      console.log(err);
    }.bind(this)
});
},


getInitialState: function() {
  return ({
    savedMovies:[]
  });
},

removeDelete:function(imdbID){
    alert(imdbID);
    var temp=this.state.savedMovies;
    for(var i=0;i<temp.length;i++){
      if(temp[i].imdbID==imdbID){
      alert("before removing movie "+temp.imdbID)
      temp.splice(i,1);
      alert("after removing movie "+temp.imdbID)
      break;
    }
  }
this.setState({savedMovies:temp})
},

updateComments:function(obj){
  var temp=this.state.savedMovies;
  for(var i=0;i<temp.length;i++){
  if(temp[i].imdbID==obj.imdbID){
    temp[i].comments=obj.comments;
    break;
  }
}
this.setState({savedMovies:temp})
},



  render: function(){
console.log(this.state.savedMovies);

      var deleteId = this.removeDelete;
      var updateComm=this.updateComments;
      var savedMoviesArr=this.state.savedMovies.map(function(movie){
      return(<SavedMovieLayout deleteByIdRef={deleteId} movieObject={movie} updateByIdRef={updateComm} />);
    });
      return(
        <div className="container">
        {savedMoviesArr}
        </div>
        );
    }
    });


module.exports=Favourites;
