import React from "react";
import { Route } from "react-router-dom";

class Searchheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
    this.sendkey = this.sendkey.bind(this);
  }

  onchange = (e) => {
    console.log(e.type + " : " + e.target.value);
    this.setState({
      keyword: e.target.value,
    });
  };

  sendkey() {
    this.props.getsearchkey(this.state.keyword);
  }

  render() {
    return (
      <header>
        <div className="header_div">
          <div className="headerimgdiv">
            <img src="../logo04.png" alt="main" />
          </div>
          <div className="search_w_img">
            <div className="searchwindow">
              <input
                type="text"
                placeholder=""
                onChange={this.onchange}
                value={this.state.keyword}
              />
            </div>
            <div className="searchbtn">
              <input
                type="image"
                alt="searchbtn"
                src="../search.png"
                onClick={this.sendkey}
              />
            </div>
          </div>
          <div className="loginbtn">
            <input
              className="inputlogbtn"
              name="login"
              type="button"
              value="Login"
            />
          </div>
        </div>
      </header>
    );
  }
}
export default Searchheader;
