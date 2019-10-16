import React from 'react';

class Header extends React.Component {
  render() {
    const name = this.props.name;
    const prevName = this.props.prevName;
    const backMethod = () => this.props.setView(prevName, name, {});
    let leftButton, title, rightButton;

    switch (name) {
      case 'home':
        leftButton = <button className="btn main__button">Sign Up</button>;
        rightButton = <button className="btn main__button">Log In</button>;
        title = '';
        break;
      case 'map':
        leftButton = <button className="btn map__button" onClick={backMethod}>Back</button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        rightButton = '';
        break;
    }

    return (
      <div className="main__header">
        { leftButton }
        { title }
        { rightButton }
      </div>
    );
  }
}

export default Header;
