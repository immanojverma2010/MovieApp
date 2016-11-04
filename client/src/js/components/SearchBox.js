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
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="MovieName"></input>
        <br></br>
        <button>Search</button>
        <br></br>
      </form>
      </div>

    );
  }
});

module.exports=SearchBox;
