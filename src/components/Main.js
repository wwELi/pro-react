require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imgJSON = require('../config/base.js').default.imgsData;

class AppComponent extends React.Component {
  	constructor(props) {
    super(props);
    this.init();
  }
  init(){
  	this.arr=imgJSON.map((i)=>{
          i.url=require('../images/'+i.name);
          return i;
       });
  }
  render() {
    return (
      <div className="index">
          {
      	this.arr.map((i)=>{
          return <div><img src={i.url} style={{width:'40px',height:"40px"}}/></div>
      	})
      	 
         }
 
        <div className="notice"> {this.arr[0].url}</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
