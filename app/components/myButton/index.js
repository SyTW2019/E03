import React from "react";

export default class Button extends React.Component {

  render(){
    return(
      <div>
        <button data-testid="button" onClick={this.props.onClick}>{this.props.title}</button>
      </div>
    );
  }
}
