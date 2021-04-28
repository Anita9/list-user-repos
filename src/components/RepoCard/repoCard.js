import { Component } from 'react';
import PropTypes from 'prop-types';
import './repoCardStyles.css';

class RepoCard extends Component {

  getDate = (date) => {
    return new Date(date).toDateString();
  }

  render() {
    const { url, name, description, createdDate, stargazers, watchers, forks, licence } = this.props;
    return (
      <button className="repo-wrapper" onClick={() => window.open(url, '_blank').focus()}>
        <h3 className="repo-name">{name}</h3>
        <div className="repo-description">
          <div className="repo-description-clamp">
            {description ? description : "This repository doesn't have a description."}
          </div>
        </div>
        <div className="repo-created-date">Created: {this.getDate(createdDate)}</div>
        <div className="repo-info-wrapper">
          <div className="repo-element-col-1">Stargazers: {stargazers}</div>
          <div className="repo-element-col-2">Watchers: {watchers}</div>
          <div className="repo-element-col-1">Forks: {forks}</div>
          <div className="repo-element-col-2">Licence: {licence ? licence : "None"}</div>
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