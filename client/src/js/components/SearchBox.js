var React= require('react');

var SearchBox= React.createClass({

onFormSubmit: function (e) {
e.preventDefault();
var movieName=this.refs.MovieName.value;
this.refs.MovieName.value='';
this.props.onSearch(movieName);
},

  render: function(){

    return(

      <div className="well">
      <div className="container text-center">
      <h1>Search Movie</h1>
      <br></br>
      <form onSubmit={this.onFormSubmit} className="navbar-form center">
        <div className="form-group">
          <input type="text" ref="MovieName" className="form-control" />&emsp;&emsp;
        </div>
        <button  className="btn btn-primary">
        <span className="glyphicon glyphicon-search"></span>  Search
        </button>
      </form>
      </div>
      </div>


    );
  }
});

module.exports=SearchBox;
