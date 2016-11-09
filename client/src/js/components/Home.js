var React= require('react');
var FindMovie=require("../components/FindMovie.js");

var Home= React.createClass({
render: function(){
  return(
    <div>
    <FindMovie />
    <div className="container">
    <h1>Hello User!!!! </h1>
    </div>
    </div>
  );
}
})

module.exports=Home
