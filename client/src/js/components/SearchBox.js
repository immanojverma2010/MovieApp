var React= require('react');

var SearchBox= React.createClass({

onFormSubmit: function (e) {
e.preventDefault();
var movieName=this.refs.MovieName.value;
this.refs.MovieName.value='';
this.props.onFind(movieName);
},

  render: function(){

    return(
      <div>
      <form onSubmit={this.onFormSubmit} className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" ref="MovieName" className="form-control" />
        </div>
        <button  className="btn btn-default">
          Search
        </button>
      </form>
      </div>

    );
  }
});

module.exports=SearchBox;
