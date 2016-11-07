var React= require('react');
var Modal = require('react-modal');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
var SavedMovieLayout= React.createClass({

  getInitialState: function() {
      return { modalIsOpen: false };
    },

    openModal: function() {
      this.setState({modalIsOpen: true});
    },

    afterOpenModal: function() {
      // references are now sync'd and can be accessed.
      this.refs.subtitle.style.color = '#f00';
    },

    closeModal: function() {
      this.setState({modalIsOpen: false});
    },





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
    Year of Release:  <h3>{this.props.movieObject.Year}</h3>
    <a href={link} className="btn btn-primary" target="_blank">see on IMDB</a>&nbsp;&emsp;
    <button onClick={this.openModal}>Open Modal</button>&nbsp;&emsp;
    <Modal
   isOpen={this.state.modalIsOpen}
   onAfterOpen={this.afterOpenModal}
   onRequestClose={this.closeModal}
   style={customStyles} >

   <h2 ref="subtitle">Hello</h2>
   <button onClick={this.closeModal}>close</button>
   <div>I am a modal</div>
   <form>
     <input />
     <button>tab navigation</button>
     <button>stays</button>
     <button>inside</button>
     <button>the modal</button>
   </form>
 </Modal>
    <button onClick={this.deleteMovie} className="btn btn-warning">Delete from favourite</button>
    </div>
    </div><br></br><hr></hr>
    </div>
    );
  }
});

module.exports=SavedMovieLayout;
