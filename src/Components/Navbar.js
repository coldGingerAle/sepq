import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PopOverExampleSimple from './PopOverExampleSimple';
import './Styles/Navbar.css';
import './Styles/Dropdown.css'

class Navbar extends Component {
  render() {
    return(
      <div>
        <div className="navbar">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo"><img id="logo" src="https://i.imgur.com/qy6H3GF.png"/></a>
              <ul className="right hide-on-med-and-down">
                <li><a onClick={() => this.props.history.push('/')}>Home</a></li>
                <li><a onClick={() => this.props.history.push('/team')}>Team</a></li>
                <li><a target="_blank" href="https://www.medium.com/sepqc">Blog</a></li>
                <li><a>Askseptopus</a></li>
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


