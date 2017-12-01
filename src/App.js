import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './TransitionStyles/styles';

import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Image1 from './Components/Image1';
import Image2 from './Components/Image2';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      show: [],
      posts: [],
      showImage: false
    })
  }
  componentDidMount() {
    this.setState({
      show: false
    })
    axios.get('http://localhost:8000/post')
      .then(response => {
        const trueArray = response.data.map(data => {
          return true
        });
        this.setState({
          posts: response.data
        })
        return trueArray;
      })
      .then((trueArray) => {
        this.setState({
          show: trueArray,
          showImage: true
        })
      })
  }

  render() {
    const show = this.state.show;
    const showImage = this.state.showImage;
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

    return (
      <div className="App">
        <MuiThemeProvider>
          <Navbar />
          <Image1 />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
