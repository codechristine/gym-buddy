import React from 'react';

class Header extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    const name = this.props.name;
    const prevName = this.props.prevName;
    const currentUser = this.props.currentUser;
    const gymName = this.props.gymName;
    const backMethod = () => this.props.setView(prevName, name, {});
    const signUpView = () => this.props.setView('signup', 'home', {});
    const loginView = () => this.props.setView('login', 'home', {});
    const profileView = () => this.props.setView('profile', 'home', {});
    const profileViewFromGym = () => this.props.setView('profile', 'map', {});
    const homeView = () => this.props.setView('home', 'map', {});

    let leftButton, title, rightButton;

    switch (name) {
      case 'home':
        leftButton = <button className="btn main__button" onClick={signUpView}>Sign Up</button>;
        rightButton = <button className="btn main__button" onClick={loginView} >Log In</button>;
        if (isLoggedIn) {
          leftButton = '';
          rightButton = <button className="btn main__button icon__home" onClick={profileView}><i className="icon__main fas fa-user"></i></button>;
        }
        break;
      case 'map':
        leftButton = <button className="btn map__button" onClick={homeView}>Back</button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        if (isLoggedIn) {
          rightButton = <button className="icon__container" onClick={profileView}><i className="icon fas fa-user"></i></button>;
          title = <div className="main__header-sub">GYM BUDDY</div>;
        }
        break;
      case 'signup':
        leftButton = <button className="btn map__button" onClick={backMethod}>Back</button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        break;
      case 'login':
        leftButton = <button className="btn map__button" onClick={backMethod}>Back</button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        break;
      case 'gym':
        leftButton = <button className="btn map__button" onClick={backMethod}>Back</button>;
        title = <div className="main__header-gym">{gymName}</div>;
        if (isLoggedIn) {
          rightButton = <button className="icon__container" onClick={profileViewFromGym}><i className="icon fas fa-user"></i></button>;
        }
        break;
      case 'profile':
        leftButton = <button className="btn map__button" onClick={backMethod}>Back</button>;
        title = <div className="main__header-username">{currentUser.username}</div>;
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
