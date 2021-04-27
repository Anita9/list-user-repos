import React from 'react';
import { Component } from 'react';
import './userCardStyles.css';


class UserCard extends Component {

  render() {
    return (
      <button className="wrapper" onClick={() => alert('User clicked!')}>
        <img src={this.props.avatar} alt="avatar" className="user-avatar"/>
        <div className="user-info">
          <h5 className="user-name">{this.props.username}</h5>
          <div className="user-description">{this.props.description}</div>
        </div>
      </button>
    );
  }
}

export default UserCard;