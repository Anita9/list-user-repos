import React from 'react';
import { Component } from 'react';
import './repoCardStyles.css';
import TextTruncate from 'react-text-truncate';

class RepoCard extends Component {

  getDate = (date) => {
    return new Date(date).toDateString();
  }

  render() {
    return (
      <button className="repo-wrapper" onClick={() => window.open(this.props.url, '_blank').focus()}>
        <h3 className="repo-name">{this.props.name}</h3>
        <div className="repo-description">
          <TextTruncate
            line={3}
            element="div"
            truncateText="..."
            text={this.props.description}
          />
        </div>
        <div className="repo-created-date">Created: {this.getDate(this.props.createdDate)}</div>
        <div className="repo-info-wrapper">
          <div className="stargazers">Stargazers: {this.props.stargazers}</div>
          <div className="watchers">Watchers: {this.props.watchers}</div>
          <div className="forks">Forks: {this.props.forks}</div>
          <div className="repo-licence">Licence: {this.props.licence ? this.props.licence : "None"}</div>
        </div>
      </button>
    )
  }
}

export default RepoCard;