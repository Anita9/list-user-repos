import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom'
import './userCardStyles.css';
import TextTruncate from 'react-text-truncate';


class UserCard extends Component {

  render() {
    return (
      <Link to="/repos" className="user-link">
        <button className="user-wrapper">
          <img src={this.props.avatar} alt="avatar" className="user-avatar"/>
          <div className="user-info">
            <h4 className="user-name">{this.props.username}</h4>
            <div className="user-description">
              <TextTruncate
                  line={2}
                  element="div"
                  truncateText="..."
                  text={this.props.description}
                />
            </div>
          </div>
        </button>
      </Link>
    );
  }
}

export default UserCard;