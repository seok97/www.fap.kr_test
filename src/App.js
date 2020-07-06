import React, { Component } from 'react';
import Searchheader from './routes/Searchheader';
import './routes/Searchheader.css';
import './routes/showimg.css';
import Showimg from './routes/showimg';
import './medi.css';
import './routes/searchpage.css';
import Searchpage from './routes/searchpage';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <Router>
      <div className="root_div">
        <Searchheader />
        <div className="routepages">
          <Route exact path="/" component={Showimg} />
          <Route path="/s" component={Searchpage} />
        </div>
      </div>
  </Router>
    );
  }
}

/*
function App() {
  return (
    <Router>
      <div className="root_div">
        <Searchheader />
        <div className="routepages">
          <Route exact path="/" component={Showimg} />
          <Route path="/s" component={Searchpage} />
        </div>
      </div>
  </Router>
  );
}
*/

export default App;
