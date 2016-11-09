var React= require('react');
var FindMovie=require('../components/FindMovie.js')
var {Link}=require('react-router');

var NavBar= React.createClass({

  render: function(){

    return(
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-default navbar-inverse" role="navigation">
              <div className="container">
              <div className="navbar-header">

                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                   <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                </button><Link className="navbar-brand" to="/home">MovieInfo</Link>
                              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


                <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <li>
                  <Link to="/favourites">Favourites</Link>
                </li>
                <li className="dropdown">
                     <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span>MyAccount<strong className="caret"></strong></a>
                    <ul className="dropdown-menu">
                    <li>
                        <a href="#"><span className="glyphicon glyphicon-wrench"></span> Settings</a>
                      </li>
                      <li>
                        <a href="#"><span className="glyphicon glyphicon-refresh"></span> Update Profile</a>
                      </li>
                      <li>
                        <a href="#"><span className="glyphicon glyphicon-briefcase"></span> Billing</a>
                      </li>
                      <li className="divider">
                      </li>
                      <li>
                        <a href="#"><span className="glyphicon glyphicon-off"></span> LogOut</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                </div>
              </div>

            </nav>
          </div>
        </div>
      </div>





    );
  }
});

module.exports=NavBar;
