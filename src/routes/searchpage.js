import React, {Component} from 'react';
const fetch = require('node-fetch');


/////////////////////google custom search api 
/* var apikey = 'AIzaSyBpbYnG2Lmg7QZbSGuF98eLPhuST-BN3y8';
var apikey2 = 'AIzaSyDEfLIi8EMy6y5krcQNRbf1jaeNIkYkoBk';

var mysite1 = '003179116642024206801:xxjwiwpmroa';
var mysite2 = '003179116642024206801:potcli8jnu4';

var api = apikey2;
var cx = mysite2;

var reqURL = 'https://customsearch.googleapis.com/customsearch/v1?cr=countryKR&cx='+cx+'&highRange=5&imgSize=MEDIUM&lr=lang_ko&num=5&q=%ED%94%BC%EC%B9%B4%EC%B8%84&searchType=image&key='+api;
/////////////////////////////////////////////////////////////////////////
 */



class Searchpage extends Component {


////////////////////////////////////////////////////// google crawling

   constructor(props){
    super(props);
    this.state = { data: null}
  }

  componentDidMount(){
    fetch('http://localhost:3002/')
    .then(res => { console.log(res); return res.json();})
    .then(res => { 
      console.log('워지');
    });
  } 


////////////////////////////////////////////////////////////



  //////////////////////////////////////////////////////////////////////////////////////////// google custom search api 
/*   constructor(props){
    super(props);
    this.state = {contents: []}
  }

  componentDidMount(){
    fetch(reqURL).then(res => {return res.json()})
    .then(res => { 
      //this.setState({title: res.items[0].title , src: res.items[0].link})
      //console.log(this.state); 
      console.log('받아온 데이터 : ' + res);
        const { contents } = this.state;
      for(var i=0;  i < 5; i++){
        this.setState( 
          {contents: this.state.contents.concat({idx: i, title: res.items[i].title, src: res.items[i].link})} 
          );
    }
    console.log('state 데이터 테스트 : '+this.state.contents[0].title);

    }
        );
  } */
/////////////////////////////////////////////////////////////////////////////////////////////////////////

  render(){
  return (
  <div className="searchpage_root">
    <div id="image_test">
      <h1>받은 값 : {}</h1>
      {/* <img alt={this.state.data[0].alt} src={this.state.data[0].src}></img> */}
    </div>
  </div>
  );
  }

}


export default Searchpage;

