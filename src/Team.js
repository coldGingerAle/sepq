import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import AutoComplete from 'material-ui/AutoComplete';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './TransitionStyles/styles';

import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Image1 from './Components/Image1';
import Footer from './Components/Footer';
import './App.css';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      show: false,
      posts: [],
      showImage: false,
      searchText: '',
      states: [true, true, true, true, true, true, true, true]
    })
  }

  componentDidMount() {
    this.setState({
      show: true
    })
  }

  handleStates(index) {
    const statesCopy = this.states.splice();
    statesCopy[index] =  !statesCopy[index];
    this.setState({
      states: statesCopy
    })
  }

  render() {
    const show = this.state.show;
    const posts = this.state.posts.map((post, index) => {
      return (
        <Transition in={show[index]} timeout={300 + index * 150}>
          {(state) => (
            <div style={{
              ...styles.defaultStyle,
              ...styles.transitionStyles[state]
            }}>
            <Card paragraph={post.body} title={post.title} postType={post.postType}/>
            </div>
          )}
        </Transition>
      )
    })

    const portrait = <div className="card">
      <div className="card-image">
        <img src="http://static.adweek.com/adweek.com-prod/files/imagecache/node-blog/totinos-stock-08-2014.jpg"/>
      </div>
    </div>

    return (
      <div className="App" style={{height: 1000}}>
        <MuiThemeProvider>
          <Navbar />
          <h1 style={{color: '#009688'}}>Meet the SEP Team!</h1>
          <div className="row" style={{marginTop: 70}}>

          <Transition in={show} timeout={300 + 0 * 150}>
            {(state) => (
              <div style={{
                ...styles.defaultStyle,
                ...styles.transitionStyles[state]
              }}>
              <div className="col m2 offset-m2 card">
                <div>
                  <div className="card-image">
                    <img style={{width: '100%', paddingTop: 10, paddingBottom: 10, height: 300}} src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13254417_1172885646078710_3971274647004266280_n.jpg?oh=369037ac1bef55dfe038796831c223b2&oe=5AC7AA8E"/>
                    <span className="card-title">Humza Michelle</span></div>
                </div>
              </div>
              </div>
            )}
          </Transition>

          <Transition in={show} timeout={300 + 1 * 150}>
            {(state) => (
              <div style={{
                ...styles.defaultStyle,
                ...styles.transitionStyles[state]
              }}>
              <div className="col m2 card">
                <div>
                  <div className="card-image">
                    <img style={{width: '100%', paddingTop: 10, paddingBottom: 10, height: 300}} src="https://media.licdn.com/media/AAEAAQAAAAAAAA2bAAAAJGUwMTc1MThjLTRiYTUtNDBjMS1iZTk2LWUyMTA3MDRjNjgxMQ.jpg"/>
                    <span className="card-title">Hui Lin</span>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Transition>

          <Transition in={show} timeout={300 + 2 * 150}>
            {(state) => (
              <div style={{
                ...styles.defaultStyle,
                ...styles.transitionStyles[state]
              }}>
              <div className="col m2 card">
                <div>
                  <div className="card-image">
                    <img style={{width: '100%', paddingTop: 10, paddingBottom: 10, height: 300}} src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/23435257_1934321629927753_8400174529365854630_n.jpg?oh=3a7d31dc5c7f0ec05f5bc3b2b84b6eff&oe=5A8A4596"/>
                    <span className="card-title">Liam Phillip</span>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Transition>

          <Transition in={show} timeout={300 + 3 * 150}>
            {(state) => (
              <div style={{
                ...styles.defaultStyle,
                ...styles.transitionStyles[state]
              }}>
              <div className="col m2 card">
                <div>
                  <div className="card-image">
                    <img style={{width: '100%', paddingTop: 10, paddingBottom: 10, height: 300}} src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21617852_2084097491876872_774646920762769035_n.jpg?oh=1809f7cccb88f184b33b1636b153491f&oe=5A94A70E"/>
                    <span className="card-title">German Diagama</span>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Transition>
          </div>


          <div className="row" style={{marginTop: 50}}>

          <Transition in={show} timeout={300 + 4 * 150}>
            {(state) => (
              <div style={{
                ...styles.defaultStyle,
                ...styles.transitionStyles[state]
              }}>
              <div className="col m2 offset-m2 card">
                <div>
                  <div className="card-image">
                    <img style={{width: '100%', paddingTop: 10, paddingBottom: 10, height: 300}} src="https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"/>
                    <span className="card-title">Victor Yeung</span>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Transition>

          <Transition in={show} timeout={300 + 5 * 150}>
            {(state) => (
              <div style={{
                ...styles.defaultStyle,
                ...styles.transitionStyles[state]
              }}>
              <div className="col m2 card">
                <div>
                  <div className="card-image">
                    <img style={{width: '100%', paddingTop: 10, paddingBottom: 10, height: 300}} src="http://vignette3.wikia.nocookie.net/superman/images/b/bc/Superman-injusticegodsamongus.png/revision/latest?cb=20130620230723"/>
                    <span className="card-title">Name Here</span>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Transition>

          <Transition in={show} timeout={300 + 6 * 150}>
            {(state) => (
              <div style={{
                ...styles.defaultStyle,
                ...styles.transitionStyles[state]
              }}>
              <div className="col m2 card">
                <div>
                  <div className="card-image">
                    <img style={{width: '100%', paddingTop: 10, paddingBottom: 10, height: 300}} src="http://s2.thingpic.com/images/Aq/hhqykKkb7A3W9Lsa1Sb6rmJv.png"/>
                    <span className="card-title">Name Here</span>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Transition>

          <Transition in={show} timeout={300 + 7 * 150}>
            {(state) => (
              <div style={{
                ...styles.defaultStyle,
                ...styles.transitionStyles[state]
              }}>
              <div className="col m2 card">
                <div>
                  <div className="card-image">
                    <img style={{width: '100%', paddingTop: 10, paddingBottom: 10, height: 300}} src="https://uproxx.files.wordpress.com/2016/11/doctor-strange-feature.jpg?quality=100"/>
                    <span className="card-title">Name Here</span>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Transition>
          </div>
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Landing;



// WEBPACK FOOTER //
// ./src/Team.js