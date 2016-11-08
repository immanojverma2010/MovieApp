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
      <div>
      <div className="container">
      <form onSubmit={this.onFormSubmit} className="navbar-form center">
        <div className="form-group">
          <input type="text" ref="MovieName" className="form-control" name="Search your movie"/>
        </div>
        <button  className="btn btn-default">
          Search
        </button>
      </form>
      </div>
      </div>
    );
  }
});

module.exports=SearchBox;
