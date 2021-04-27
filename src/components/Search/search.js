import { Component } from "react";
import './searchStyles.css';
import search from '../../search.svg'
import UserCard from '../UserCard/userCard';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo, getuserRepos } from '../../state/actions';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      username: e.target.value
    })
  }

  getUser = (e) => {
    e.preventDefault();
    this.props.getUserInfo(this.state.username);
    this.forceUpdate();
  }

  render() {

    console.log(this.props);
    const { userInfo } = this.props;
    return (
      <div>
        <form role="search" className="search-wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search Users"
            className="search-input"
            onChange={this.onChange}
            value={this.state.username}
            // onKeyPress={this.getUser}
          />
          <button className="search-button" onClick={this.getUser}>
            <img src={search} alt="search" className="search-icon"/>
          </button>
        </form>
          {Object.keys(this.props.userInfo).length !== 0 && <UserCard
            avatar={userInfo.avatar_url}
            username={userInfo.login}
            description={userInfo.bio}
            getUserRepos={this.props.getUserRepos}
          />}
      </div>
    );
  }
}

Search.propTypes = {
  userInfo: PropTypes.object,
  userRepos: PropTypes.array,
  getUserInfo: PropTypes.func,
  getuserRepos: PropTypes.func
}

const mapStateToProps = state => {
  return {
    userInfo: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  getUserInfo: bindActionCreators(getUserInfo, dispatch),
  getUserRepos: bindActionCreators(getuserRepos, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);