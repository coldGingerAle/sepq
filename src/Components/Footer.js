import React, { Component } from 'react';
import './Styles/Image1.css'

class Footer extends Component {
  render() {
    return(
      <footer className="page-footer" style={{backgroundColor: '#009688', fontFamily: 'Raleway'}}>
         <div className="container">
           <div className="row">
             <div className="col l6 s12 m12">
               <h5 className="white-text">Want to join the revolution?</h5>
               <p className="grey-text text-lighten-4">Shoot us an email at empowerqc@gmail.com</p>
             </div>
             <div className="col l4 offset-l2 s12">
               <h5 className="white-text">Social</h5>
               <ul>
                 <li><a className="grey-text text-lighten-3" href="https://facebook.com/sepqueens">Our Facebook</a></li>
                 <li><a className="grey-text text-lighten-3" href="https://twitter.com/sep_QC">Our twitter</a></li>
               </ul>
             </div>
           </div>
         </div>
         <div className="footer-copyright">
           <div className="container">
           © 2017 Copyright Hui Lin
           </div>
         </div>
       </footer>
    )
  }
}

export default Footer;
