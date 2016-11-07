var React= require('react');
var ReactDOM= require('react-dom');
/*var SearchBox=require("./components/SearchBox.js");*/
var DisplayBox=require("./components/DisplayBox.js");
var NavBar=require("./components/NavBar.js");
var Contact=require("./components/Contact.js");
var Home=require("./components/Home.js");
var About=require("./components/About.js");
var Favourites=require("./components/Favourites.js");
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var Movies = React.createClass({
  handleAjaxCall: function (movieName) {

    alert(movieName);
    var url="https://omdbapi.com/?s="+movieName;

    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'JSON',

      success: function(data)
      {
        alert(data.Response);
        if(data.Response=="True"){
          alert("coming inside");
        this.setState({movieDesc:data.Search});
        }
      }.bind(this),

      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
    /*
    $.getJSON(url, function(jsonData){
    console.log(jsonData.Search);
    alert("Fetching Data");
    that.setState({movieDesc:jsonData.Search});
  });
},
*/
},
getInitialState: function() {
  return {
    movieDesc: []
  };
},

render: function() {
  return (
    <div>
    <NavBar onSearch={this.handleAjaxCall} />
    <DisplayBox movieObj={this.state.movieDesc} />
    {this.props.children}
    </div>
  )
/*(this was removed because this functionality later added in nav-bar search box)
<SearchBox onSearch={this.handleAjaxCall} />
(this was added before <DisplayBox>)
*/
}

});

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path = "/" component = {Movies} >
      <IndexRoute component = {Home} />
      <Route path = "/home" component = {Home} />
      <Route path = "/favourites" component = {Favourites} />
       <Route path = "/about" component = {About} />
       <Route path = "/contact" component = {Contact} />
       </Route>
</Router>,
  document.getElementById('app')
);
