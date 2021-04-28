import React from 'react';
import { Component } from 'react';
import './repoCardStyles.css';
import PropTypes from 'prop-types';

class RepoCard extends Component {

  getDate = (date) => {
    return new Date(date).toDateString();
  }

  render() {
    return (
      <button className="repo-wrapper" onClick={() => window.open(this.props.url, '_blank').focus()}>
        <h3 className="repo-name">{this.props.name}</h3>
        <div className="repo-description">
          <div className="repo-description-clamp">
            {this.props.description}
          </div>
        </div>
        <div className="repo-created-date">Created: {this.getDate(this.props.createdDate)}</div>
        <div className="repo-info-wrapper">
          <div className="repo-element-col-1">Stargazers: {this.props.stargazers}</div>
          <div className="repo-element-col-2">Watchers: {this.props.watchers}</div>
          <div className="repo-element-col-1">Forks: {this.props.forks}</div>
          <div className="repo-element-col-2">Licence: {this.props.licence ? this.props.licence : "None"}</div>
        </div>
      </button>
    )
  }
}

RepoCard.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  createdDate: PropTypes.string,
  stargazers: PropTypes.number,
  watchers: PropTypes.number,
  forks: PropTypes.number,
  licence: PropTypes.string
}

export default RepoCard;