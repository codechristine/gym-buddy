import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="main__header">
        <button className="btn main__button">Sign Up</button>
        <button className="btn main__button">Log In</button>
      </div>
    );
  }
}

export default Header;
