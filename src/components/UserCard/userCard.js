import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom'
import './userCardStyles.css';
import PropTypes from 'prop-types';


class UserCard extends Component {

  render() {
    return (
      <Link to="/repos" className="user-link">
        <button className="user-wrapper">
          <img src={this.props.avatar} alt="avatar" className="user-avatar"/>
          <div className="user-info">
            <h4 className="user-name">{this.props.username}</h4>
            <div className="user-description">
                <div className="user-description-clamp">
                  {this.props.description}
                </div>
            </div>
          </div>
        </button>
      </Link>
    );
  }
}

UserCard.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  description: PropTypes.string
}

export default UserCard;