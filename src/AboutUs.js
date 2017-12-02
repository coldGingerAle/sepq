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
import { withRouter } from 'react-router-dom';
import './App.css';


class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      show: [],
      posts: [],
      showImage: false,
      searchText: ''
    })
  }
  handleUpdateInput = (searchText) => {
    this.setState({
       searchText: searchText,
     });
   };
  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };
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
    const colors = [
      'How do I set up direct deposit?',
      'Biology major requirements.',
      'How do I start a club?',
      'Who are the administrators at QC?',
      'Cool bio events near me.'
    ]

    return (
      <div className="App" style={{height: 10000}}>
        <MuiThemeProvider>
          <Navbar />
          About Us
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AboutUs;
