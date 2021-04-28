import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Search from './components/Search/search';
import ReposList from './components/ReposList/reposList';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/list-user-repos" component={Search} exact/>
            <Route path="/repos" component={ReposList} exact/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
