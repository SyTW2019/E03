import React from "react";

export default class H1 extends React.Component {
  render(){
    return(
      <h1 data-testid="h1">{this.props.title}</h1>
    );
  }
}
