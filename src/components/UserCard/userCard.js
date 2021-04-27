import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom'
import './userCardStyles.css';


class UserCard extends Component {

  render() {
    return (
      <Link to="/repos">
        <button className="wrapper">
          <img src={this.props.avatar} alt="avatar" className="user-avatar"/>
          <div className="user-info">
            <h5 className="user-name">{this.props.username}</h5>
            <div className="user-description">{this.props.description}</div>
          </div>
        </button>
      </Link>
    );
  }
}

export default UserCard;