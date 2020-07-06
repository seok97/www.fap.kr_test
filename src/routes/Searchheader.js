import React from 'react';


function Searchheader(){
  return (
    <header>
    <div className="header_div">
      <div className="headerimgdiv">
        <img src="./logo04.png" alt="main"/>
      </div>
      <div className="search_w_img">
        <div className="searchwindow"><input type="text" placeholder=""/></div>
        <div className="searchbtn"> <input type="image" alt="searchbtn" src="./search.png"/></div>
      </div>
      <div className="loginbtn"> <input className="inputlogbtn" name="login" type="button" value="Login"/> </div>
    </div>
  </header> 
  );
}
export default Searchheader;
