import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
              <a className="brand-logo left"><img id="logo" src="https://scontent-lga3-1.xx.fbcdn.net/v/t35.0-12/23432792_10210086931114078_260728260_o.jpg?oh=5d6cf317fab2547ee3b8db7a672e0caf&oe=5A24CEC4"/></a>
              <ul className="right hide-on-med-and-down">
                <li><a onClick={() => this.props.history.push('/')}>Home</a></li>
                <li><a onClick={() => this.props.history.push('/aboutus')}>About Us</a></li>
                <li><a>Adopt</a></li>
                <li><a>Askseptopus</a></li>
                <li><a href="https://medium.com/sepqc">Blog</a></li>
                <li><PopOverExampleSimple/></li>
                <li style={{marginRight: 100}}><a>Connect</a></li>
              </ul>
            </div>
        </nav>
      </div>
    </div>
    )
  }
}

export default withRouter(Navbar);
