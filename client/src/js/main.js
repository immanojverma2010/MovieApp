var React= require('react');
var ReactDOM= require('react-dom');
/*var SearchBox=require("./components/SearchBox.js");*/
var DisplayBox=require("./components/DisplayBox.js");
var NavBar=require("./components/NavBar.js");

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
    </div>
  )
/*(this was removed because this functionality later added in nav-bar search box)
<SearchBox onSearch={this.handleAjaxCall} />
(this was added before <DisplayBox>)
*/
}

});

ReactDOM.render(
  <Movies />,
  document.getElementById('app')
);
