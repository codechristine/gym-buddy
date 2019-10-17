import React from 'react';
import Header from './header';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const eventTarget = event.target.name;

    switch (eventTarget) {
      case 'username':
        this.setState({ username: event.target.value });
        break;
    }
  }
  render() {
    const { username } = this.state;

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} />
        <div className="main__body">
          <div className="login__container">
            <form className="login__box">
              <div className="login__input">
                <div className="login__card">
                  <div className="login__card-username">Username</div>
                  <input value={username} onChange={this.handleChange} type="text" name="username" className="login__card-input" autoComplete="off"></input>
                </div>
                <div className="login__card">
                  <div className="login__card-username">Password</div>
                  <input type="password" name="password" className="login__card-input"></input>
                </div>
              </div>
              <button className="btn login__button">Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
