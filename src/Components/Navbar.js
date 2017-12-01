import React, { Component } from 'react';
import PopOverExampleSimple from './PopOverExampleSimple';
import './Styles/Navbar.css';
import './Styles/Dropdown.css'

class Navbar extends Component {
  render() {
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo left"><img id="logo" src="https://pbs.twimg.com/profile_images/664157362178035713/kqLs8AbB.jpg"/></a>
              <ul className="right hide-on-med-and-down">
                <li><PopOverExampleSimple/></li>
                <li><a>About Us</a></li>
                <li><a>Adopt</a></li>
                <li><a>View Incidents</a></li>
                <li><a>Profile</a></li>
                <li style={{marginRight: 100, marginLeft: 100}}><a className="btn waves-effect waves-light"><i className="fa fa-paw" aria-hidden="true" style={{marginTop: -12}}></i> Log In</a></li>
              </ul>
            </div>
        </nav>
      </div>
    </div>
    )
  }
}

export default Navbar;
