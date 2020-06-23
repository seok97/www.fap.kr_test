import React from 'react';


function Searchheader(){
  return (
    <header>
    <div class="header_div">
      <div class="headerimgdiv">
        <img src="./logo04.png" alt="main"/>
      </div>
      <div class="search_w_img">
        <div class="searchwindow"><input type="text" placeholder=""/></div>
        <div class="searchbtn"> <input type="image" alt="searchbtn" src="./search.png"/></div>
      </div>
      <div class="loginbtn"> <input class="inputlogbtn" name="login" type="button" value="Login"/> </div>
    </div>
  </header> 
  );
}
export default Searchheader;
