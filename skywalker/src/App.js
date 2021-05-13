import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'

import Display from './components/Display'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Search/>
      <Router>
        <Display path="/:category/:id"/>
      </Router>
    </div>
  );
}

export default App;
