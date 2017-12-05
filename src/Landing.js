import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      <div className="App">
        <MuiThemeProvider>
          <Navbar />
          <Image1 />
          <div style={{backgroundColor: '#009688', height: 300, marginTop: -20}}>
            <h1 style={{margin: 0, padding: 20, color: 'white'}}>Our Mission</h1>
            <div style={{width: '60%', margin: '0 auto', color: 'white', fontFamily: 'Raleway', fontSize: 20}}>
              <p>
                We believe in democracy, the wisdom of the crowd, and the power of cooperation. 
                By stream-lining student's access to already existing resources and providing settings 
                for collaborative problem-solving and innovation, we can generate a culture of learning
                and civic engagement that lasts long after graduation. 
              </p>
            </div>
          </div>
          <div style={{marginTop: -20, padding: 40, backgroundColor: '#65BAFC', height: 400}}>
            <div className="card" style={{width: '60%', margin: '0 auto', padding: 20}}>
              <h1>Ask Us Anything</h1>
            <AutoComplete
                hintText="Ask Septopus!"
                searchText={this.state.searchText}
                onUpdateInput={this.handleUpdateInput}
                onNewRequest={this.handleNewRequest}
                dataSource={colors}
                filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                openOnFocus={true}
                fullWidth={true}
              />
            </div>
            <div style={{marginTop: 50}}>
              <a target="_blank" href="https://docs.google.com/document/d/1JcP1Ltc96bdy10ObgLBeKClJaq7SN--Z1Hr3TG6FMXY/edit" style={{marginLeft: 100, marginRight: 100, width: 500}} className="waves-effect waves-light btn">Free Events In NY</a>
              <a target="_blank" href="https://docs.google.com/document/d/1uJGEAUPqCXn0Dbu5Jl22lSssmEGaNx8i7ZbwePfS1BU/edit#heading=h.x97t9sneepo4" style={{marginLeft: 100, marginRight: 100, width: 500}} className="waves-effect waves-light btn">Free Books and Courses</a>
            </div>
          </div>
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(Landing);


