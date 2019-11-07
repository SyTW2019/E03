import React from "react";
 
// class component
class Header extends React.Component {
  render() {
    return (
      <header>
	<br />
        <div>EventsFinder</div>
        <nav>
          <a href="#/">Home</a><br />
          <a href="#/">Blog</a><br />
          <a href="#/">Photos</a><br />
          <a href="#/">Contact</a><br />
        </nav>
      </header>
    );
  }
}
 
export default Header;


