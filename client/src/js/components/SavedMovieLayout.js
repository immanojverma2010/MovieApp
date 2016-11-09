var React= require('react');

var SavedMovieLayout= React.createClass({

  deleteMovie(){
    /*addMovie: function(){}*/
    alert('Entering- Deleting movie');
    var url="http://localhost:8080/movies/deletemovies/"+this.props.movieObject.imdbID;
    //var deleteObject=this.props.movieObject;

    var deleteById=this.props.deleteByIdRef.bind(null,this.props.movieObject.imdbID);
    $.ajax({
      url:url,
      type:'DELETE',
      success: function(data){
        deleteById();
        console.log("movie Deleting" +data);
      }.bind(this),
      error: function(err){
        console.log(err);
      }.bind(this)

    });
  },

  updateComment(){
    var com = prompt("Enter comment",this.props.movieObject.comments);
    if(com!=null && com!="" ){

      if(com!=this.props.movieObject.comments){
        alert('Entering- update  movie');
        var obj = {imdbID:this.props.movieObject.imdbID,comments:com};
        var updateById=this.props.updateByIdRef.bind(null,obj);
        var url="http://localhost:8080/movies/updatemovies"
        $.ajax({
          url:url,
          type:'PUT',
          data:obj,
          success: function(data){
            /*for re-rendering*/
            updateById();
            console.log("comments updating" +data);
          }.bind(this),
          error: function(err){
            console.log(err);
          }.bind(this)

        });

      }

    }
    else if(com==""){
      alert("Comments can't be empty");
    }


  },

  render: function(){
    link="http://www.imdb.com/title/"+this.props.movieObject.imdbID;
    return(
      <div>
      <div className="row" >
      <div className="col-lg-4">
      <h1>{this.props.movieObject.Title}</h1>
      <img src={this.props.movieObject.Poster} alt="Poster Image" height="400" width="300" style={{marginTop:'20'}}></img>
      </div>

      <div className="col-lg-6" >
      <br></br>     <br></br>       <br></br>      <br></br>
      <br></br>     <br></br>       <br></br>      <br></br>
      <br></br>

      <h3>Comments:</h3>
      <div className="well"><p>{this.props.movieObject.comments} </p></div>

      <br></br>     <br></br>
      <h3>Year of Release: {this.props.movieObject.Year}</h3>
      <a href={link} className="btn btn-primary" target="_blank"><span className="glyphicon glyphicon-share-alt"></span> See on IMDB</a>&nbsp;&emsp;
      <button onClick={this.updateComment} className="btn btn-primary"><span className="glyphicon glyphicon-comment"></span> Update comments</button>&nbsp;&emsp;
      <button onClick={this.deleteMovie} className="btn btn-warning"><span className="glyphicon glyphicon-remove"></span> Delete from favourite</button>
      </div>
      </div><br></br><hr></hr>
      </div>
    );
  }
});

module.exports=SavedMovieLayout;
