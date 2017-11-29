import React, { Component } from 'react';

class Card extends Component {
  render() {
    return(
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{this.props.title}</span>
              <p>{this.props.paragraph}</p>
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
