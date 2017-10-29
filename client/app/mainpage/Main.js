import React from "react";



export default class Main extends React.Component {
constructor(){
  super();
  this.name="Jason";
}

  render(){
    return(
      <h1>Its {this.name}!</h1>

    );
  }
}
