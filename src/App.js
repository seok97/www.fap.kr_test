import React, { Component } from "react";
import Searchheader from "./routes/Searchheader";
import "./routes/Searchheader.css";
import "./routes/showimg.css";
import Showimg from "./routes/showimg";
// import './medi.css'; // 반응형
import "./routes/searchpage.css";
import Searchpage from "./routes/searchpage";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchkey: null };
    this.getsearchkey = this.getsearchkey.bind(this);
  }

  // 검색값을 가져왔는지 검사후 true 면 route
  searchcheck() {
    var check;
    if (this.state.searchkey === null) {
      console.log("state : " + this.state.searchkey);
      check = false;
    } else {
      console.log("state : " + this.state.searchkey);
      check = true;
    }
    return check;
  }

  // header에서 검색값 가져오기.
  getsearchkey(getkey) {
    this.setState({ searchkey: getkey });
    console.log(this.state.searchkey);
  }

  render() {
    return (
      <Router>
        <div className="root_div">
          <Searchheader getsearchkey={this.getsearchkey} />
          <div className="routepages">
            {this.searchcheck() ? (
              <Searchpage keyword={this.state.searchkey} />
            ) : (
              <Showimg keyword={this.state.searchkey} />
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
