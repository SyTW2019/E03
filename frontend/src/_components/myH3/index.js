import React from "react";

export default class H3 extends React.Component {
  render(){
    return(
      <h3 data-testid="h3" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>{this.props.title}</h3>
    );
  }
}
