import { Component } from "react";
import './searchStyles.css';
import search from '../../search.svg'

import UserCard from '../UserCard/userCard';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../../state/actions';

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
  }

  render() {

    const { userInfo } = this.props;
    return (
      <div>
        <form role="search" className="search-wrapper">
          <input type="search" placeholder="Search Users" className="search-input" onChange={this.onChange} value={this.state.username} name="search"/>
          <button className="search-button" onClick={this.getUser}>
            <img src={search} alt="search" className="search-icon"/>
          </button>
        </form>
        {userInfo && <UserCard avatar={userInfo.avatar_url} username={userInfo.login} description={userInfo.bio}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.reducer.userInfo
})

const mapDispatchToProps = dispatch => ({
  getUserInfo: bindActionCreators(getUserInfo, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);