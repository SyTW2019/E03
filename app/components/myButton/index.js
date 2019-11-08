import React from "react";

export default class Button extends React.Component {
  
  inDB(){
    //ALGO
  }

  render(){
    return(
      <div>
        <button onClick="inDB()">{this.props.title}</button>
      </div>
    );
  }
}
