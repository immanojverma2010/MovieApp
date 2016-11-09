var React= require('react');
var ReactDOM= require('react-dom');
var SearchBox=require("./components/SearchBox.js");
var DisplayBox=require("./components/DisplayBox.js");
var NavBar=require("./components/NavBar.js");
var Contact=require("./components/Contact.js");
var Home=require("./components/Home.js");
var About=require("./components/About.js");
var Favourites=require("./components/Favourites.js");
var FindMovie=require("./components/FindMovie.js");
var Footer=require("./components/Footer.js");
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var MainComponent = React.createClass({

  render: function() {
    return (
      <div>
      <NavBar />
      {this.props.children}
      <br></br> <br></br> <br></br> <br></br> <br></br>
      <Footer />
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
  <Route path = "/" component = {MainComponent} >
  <IndexRoute component = {FindMovie} />
  <Route path = "/home" component = {Home} />
  <Route path = "/favourites" component = {Favourites} />
  <Route path = "/searchbox" component = {SearchBox} />
  <Route path = "/about" component = {About} />
  <Route path = "/contact" component = {Contact} />
  </Route>
  </Router>,
  document.getElementById('app')
);
