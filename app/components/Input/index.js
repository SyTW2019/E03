import React from "react";

export default class Input extends React.Component {
  render(){
    return(
      <div>
        <input 
          text={this.props.text}
          ref={this.props.ref}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
          />
      </div>
    );
  }
}
