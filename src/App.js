import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import axios from 'axios';
import styles from './styles';
import Card from './Components/Card';

import './App.css';

const Fade = ({ in: inProp, component, index }) => (
  <Transition in={inProp} timeout={300}>
    {(state) => (
      <div style={{
        ...styles.defaultStyle,
        ...styles.transitionStyles[state]
      }}>
      {component}
      </div>
    )}
  </Transition>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      show: [],
      posts: []
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
          show: trueArray
        })
      })
  }
  render() {
    const show = this.state.show;
    const posts = this.state.posts.map((post, index) => {
      console.log(index)
      return <Fade in={show[index]} component={<Card paragraph={post.body} title={post.title} postType={post.postType}/>}/>
    })

    const posts2 = this.state.posts.map((post, index) => {
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
        {posts2}
      </div>
    );
  }
}

export default App;
