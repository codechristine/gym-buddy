import React from 'react';

class Header extends React.Component {
  render() {
    const name = this.props.name;
    const prevName = this.props.prevName;
    const backMethod = () => this.props.setView(prevName, name, {});
    const signUpView = () => this.props.setView('signup', 'home', {});
    const loginView = () => this.props.setView('login', 'home', {});

    let leftButton, title, rightButton;

    switch (name) {
      case 'home':
        leftButton = <button className="btn main__button" onClick={signUpView}>Sign Up</button>;
        rightButton = <button className="btn main__button" onClick={loginView} >Log In</button>;
        break;
      case 'map':
        leftButton = <button className="btn map__button" onClick={backMethod}>Back</button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        break;
      case 'signup':
        leftButton = <button className="btn map__button" onClick={backMethod}>Back</button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        break;
      case 'login':
        leftButton = <button className="btn map__button" onClick={backMethod}>Back</button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
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
