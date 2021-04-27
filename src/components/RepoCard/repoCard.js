import React from 'react';
import { Component } from 'react';
import './repoCardStyles.css';

class RepoCard extends Component {

  render() {
    return (
      <button className="repo-wrapper">
        <h3 className="repo-name">Repository name</h3>
        <div className="repo-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam</div>
        <div className="repo-created-date">{new Date().toDateString()}</div>
        <div className="repo-info-wrapper">
          <div className="stargazers">Stargazers: 5</div>
          <div className="watchers">Watchers: 25</div>
          <div className="forks">Forks: 15</div>
          <div className="repo-licence">Licence: MIT</div>
        </div>
      </button>
    )
  }
}

export default RepoCard;