import React from 'react';


function Searchheader(){
  return (
    <header>
    <div class="header_div">
      <div class="headerimgdiv">
        <img src="./logo.png" alt="main"/>
      </div>
      <div class="searchwindow"><input type="text" placeholder=""/></div>
      <div class="searchbtn"> <input type="image" alt="searchbtn" src="./searchbutton.png"/></div>
      <div class="loginbtn"> <input class="inputlogbtn" name="login" type="button" value="Login"/> </div>
    </div>
  </header> 
  );
}
export default Searchheader;
