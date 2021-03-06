import { Component } from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getuserRepos } from '../../state/actions';

import { Link } from 'react-router-dom';

import RepoCard from '../RepoCard/repoCard';

import back from '../../back.svg';
import alert from '../../alert.svg';

import './reposListStyles.css';

class ReposList extends Component {

  componentDidMount(){
    this.props.getuserRepos(this.props.userInfo.login);
  }
  
  render() {
    const { userRepos } = this.props;
    return (
      <div>
        <Link to="/list-user-repos">
          <button className="back-button">
            <img src={back} alt="Back button"/>
          </button>
        </Link>
        {!userRepos && <div className="no-repos">This user doesn't have any repositories.</div>}
        {userRepos && userRepos.length === 0 && <div className="loading-repos">Loading...</div>}
        <div  className="repos-list-wrapper">
          {userRepos && userRepos.length > 0 && userRepos.map(repo =>
            <div className="repos-list-element">
              <RepoCard
                name={repo.name}
                description={repo.description}
                createdDate={repo.created_at}
                stargazers={repo.stargazers_count}
                watchers={repo.watchers_count}
                forks={repo.forks_count}
                license={repo.license}
                url={repo.html_url}
              />
            </div> 
          )}
          {typeof userRepos === "number" &&
            <div className="repos-error">
              <img src={alert} alt="alert"/>
              We couldn't load user's repos. Please go back and try again.
            </div>
          }
        </div>
      </div>
    );
  }
}

ReposList.propTypes = {
  userInfo: PropTypes.object,
  userRepos: PropTypes.array,
  getuserRepos: PropTypes.func
}

const mapStateToProps = state => {
  return {
    userInfo: state.user,
    userRepos: state.repos
  }
}

const mapDispatchToProps = dispatch => ({
  getuserRepos: bindActionCreators(getuserRepos, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ReposList);