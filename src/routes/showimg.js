import React from "react";

class Showimg extends React.Component {
  render() {
    return (
      <div className="images">
        <div id="showimg">
          <h1>This is shwoimg.js props.keyword : {this.props.keyword}</h1>
        </div>
      </div>
    );
  }
}

export default Showimg;
