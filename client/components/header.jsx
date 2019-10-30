import React from 'react';

class Header extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    const name = this.props.name;
    const prevName = this.props.prevName;
    const currentUser = this.props.currentUser;
    const buddyUser = this.props.buddyUser;
    const placeObject = this.props.placeObject;
    const element = this.props.element;
    const backMethod = () => this.props.setView(prevName, name, {});
    const signUpView = () => this.props.setView('signup', 'home', {});
    const loginView = () => this.props.setView('login', 'home', {});
    const profileView = () => this.props.setView('profile', 'map', {});
    const profileViewToHome = () => this.props.setView('profile', 'home', {});
    const profileViewFromGym = () => this.props.setView('profile', 'gym', placeObject);
    const gymView = () => this.props.setView('gym', 'map', placeObject);
    const homeView = () => this.props.setView('home', 'map', {});
    const buddyView = () => this.props.setView('buddy', 'conversation', { element, placeObject });

    let leftButton, title, rightButton;

    switch (name) {
      case 'home':
        leftButton = <button className="btn main__button" onClick={signUpView}>Sign Up</button>;
        rightButton = <button className="btn main__button" onClick={loginView} >Log In</button>;
        if (isLoggedIn) {
          leftButton = '';
          rightButton = <button className="btn main__button icon__home" onClick={profileViewToHome}><i className="icon__main fas fa-user"></i></button>;
        }
        break;
      case 'map':
        leftButton = <button className="btn map__button" onClick={homeView}><i className="fas fa-arrow-left"></i></button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        if (isLoggedIn) {
          rightButton = <button className="icon__container" onClick={profileView}><i className="icon fas fa-user"></i></button>;
          title = <div className="main__header-sub">GYM BUDDY</div>;
        }
        break;
      case 'signup':
        leftButton = <button className="btn map__button" onClick={backMethod}><i className="fas fa-arrow-left"></i></button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        break;
      case 'login':
        leftButton = <button className="btn map__button" onClick={backMethod}><i className="fas fa-arrow-left"></i></button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        break;
      case 'gym':
        leftButton = <button className="btn map__button" onClick={backMethod}><i className="fas fa-arrow-left"></i></button>;
        title = <div className="main__header-title">GYM BUDDY</div>;
        if (isLoggedIn) {
          rightButton = <button className="icon__container" onClick={profileViewFromGym}><i className="icon fas fa-user"></i></button>;
          title = <div className="main__header-sub">GYM BUDDY</div>;
        }
        break;
      case 'profile':
        leftButton = <button className="btn map__button" onClick={backMethod}><i className="fas fa-arrow-left"></i></button>;
        title = <div className="main__header-username">{currentUser.username}</div>;
        if (prevName === 'gym') {
          leftButton = <button className="btn map__button" onClick={gymView}><i className="fas fa-arrow-left"></i></button>;
        } else if (prevName === 'signup') {
          leftButton = <button className="btn map__button" onClick={homeView}><i className="fas fa-arrow-left"></i></button>;
        } else if (prevName === 'message') {
          leftButton = <button className="btn map__button" onClick={homeView}><i className="fas fa-arrow-left"></i></button>;
        }
        break;
      case 'buddy':
        leftButton = <button className="btn map__button" onClick={profileViewToHome}><i className="fas fa-arrow-left"></i></button>;
        title = <div className="main__header-username">{buddyUser.username}</div>;
        if (prevName === 'gym') {
          leftButton = <button className="btn map__button" onClick={gymView}>Back</button>;
        } else if (prevName === 'conversation') {
          leftButton = <button className="btn map__button" onClick={profileViewToHome}>Back</button>;
          if (placeObject) {
            leftButton = <button className="btn map__button" onClick={gymView}>Back</button>;
          }
        }
        break;
      case 'message':
        leftButton = <button className="btn map__button" onClick={backMethod}><i className="fas fa-arrow-left"></i></button>;
        title = <div className="main__header-username">{currentUser.username}</div>;
        if (prevName === 'conversation') {
          leftButton = <button className="btn map__button" onClick={profileViewToHome}><i className="fas fa-arrow-left"></i></button>;
        }
        break;
      case 'conversation':
        leftButton = <button className="btn map__button" onClick={backMethod}><i className="fas fa-arrow-left"></i></button>;
        title = <div className="main__header-username">{currentUser.username}</div>;
        if (prevName === 'buddy') {
          leftButton = <button className="btn map__button" onClick={buddyView}><i className="fas fa-arrow-left"></i></button>;
        }
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
