import { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getuserRepos } from '../../state/actions';
import { Link } from 'react-router-dom';
import back from '../../back.svg';
import RepoCard from '../RepoCard/repoCard';
import './reposListStyles.css';

class ReposList extends Component {

  componentDidMount(){
    this.props.getuserRepos(this.props.userInfo.login);
  }
  render() {
    return (
      <div>
        <Link to="/">
          <button className="back-button">
            <img src={back} alt="Back button"/>
          </button>
        </Link>
        <div  className="repos-list-wrapper">
          {this.props.userRepos.map(repo =>
            <div className="repos-list-element">
              <RepoCard
                name={repo.name}
                description={repo.description}
                createdDate={repo.created_at}
                stargazers={repo.stargazers_count}
                watchers={repo.watchers_count}
                forks={repo.forks_count}
                license={repo.license}
              />
            </div> 
          )}
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