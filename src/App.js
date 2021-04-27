import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

import Search from './components/Search/search';
import Repos from './components/ReposList/reposList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Search}/>
            <Route path="/repos" component={Repos}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
