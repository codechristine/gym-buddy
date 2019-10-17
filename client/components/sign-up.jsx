import React from 'react';
import Header from './header';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      age: '',
      weightLifting: '',
      cardio: '',
      yoga: '',
      bodyBuilding: '',
      swimming: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDropDown = this.handleChangeDropDown.bind(this);
  }

  handleChange(event) {
    let eventTarget = event.target.placeholder;
    switch (eventTarget) {
      case 'First Name':
        this.setState({ firstName: event.target.value });
        break;
      case 'Last Name':
        this.setState({ lastName: event.target.value });
        break;
      case 'Age':
        this.setState({ age: event.target.value });
        break;
      case 'User Name':
        this.setState({ userName: event.target.value });
        break;
    }
  }

  handleChangeDropDown(event) {
    let eventTarget = event.target.name;

    switch (eventTarget) {
      case 'weightlifting':
        this.setState({ weightLifting: event.target.value });
        break;
      case 'cardio':
        this.setState({ cardio: event.target.value });
        break;
      case 'yoga':
        this.setState({ yoga: eventTarget.value });
        break;
      case 'bodybuilding':
        this.setState({ bodyBuilding: event.target.value });
        break;
      case 'swimming':
        this.setState({ swimming: event.target.value });
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const userObj = {
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      weightLifting: this.state.weightLifting,
      cardio: this.state.cardio,
      yoga: this.state.cardio,
      bodyBuilding: this.state.bodyBuilding,
      swimming: this.state.swimming
    };

    this.props.createUser(userObj);
  }

  render() {
    const { userName, firstName, lastName, Age, weightLifting, cardio, yoga, bodyBuilding, swimming } = this.state;

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} />
        <form className="main__body" onSubmit={this.handleSubmit}>
          <div className="signup__container">
            <div className="signup__container-top">
              <div className="signup__block">
                <h2 className="signup__block-name">User Name</h2>
                <input value={userName} type="text" onChange={this.handleChange} className="signup__block-input" placeholder="User Name" required />
              </div>
              <div className="signup__block">
                <h2 className="signup__block-name">First Name</h2>
                <input value={firstName} type="text" onChange={this.handleChange} className="signup__block-input" placeholder="First Name" required/>
              </div>
              <div className="signup__block">
                <h2 className="signup__block-name">Last Name</h2>
                <input value={lastName} type="text" onChange={this.handleChange} className="signup__block-input" placeholder="Last Name" required/>
              </div>
              <div className="signup__block">
                <h2 className="signup__block-name">Age</h2>
                <input value={Age} type="Number" onChange={this.handleChange} className="signup__block-input" placeholder="Age" min="0" required/>
              </div>
            </div>
            <div className="signup__container-bottom">
              <div className="stats__title">
                STATS
              </div>
              <div className="stats__header">
                <div className="stats__header-title">
                  Categories
                </div>
                <div className="stats__header-options">
                  Expertise Level
                </div>
              </div>
              <div className="stats__block">
                <div className="stats__block-title">WeightLifting</div>
                <div className="stats__block-options">
                  <select name="weightlifting" className="stats__block-dropdown" onChange={this.handleChangeDropDown} value={weightLifting} required>
                    <option value=""></option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Cardio</div>
                <div className="stats__block-options">
                  <select name="cardio" className="stats__block-dropdown" onChange={this.handleChangeDropDown} value={cardio} required>
                    <option value=""></option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Yoga</div>
                <div className="stats__block-options">
                  <select name="yoga" className="stats__block-dropdown" onChange={this.handleChangeDropDown} value={yoga} required>
                    <option value=""></option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Body Building</div>
                <div className="stats__block-options">
                  <select name="bodybuilding" className="stats__block-dropdown" onChange={this.handleChangeDropDown} value={bodyBuilding} required>
                    <option value=""></option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Swimming</div>
                <div className="stats__block-options">
                  <select name="swimming" className="stats__block-dropdown" onChange={this.handleChangeDropDown} value={swimming} required>
                    <option value=""></option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn signup__button">Confirm</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
