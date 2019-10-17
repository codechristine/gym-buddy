import React from 'react';
import Header from './header';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDropDown = this.handleChangeDropDown.bind(this);
  }

  handleChange(event) {

  }

  handleChangeDropDown(event) {

  }

  handleSubmit(event) {

  }
  render() {
    return (
      <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} />
    );
  }
}

export default SignUp;

/*
<div class="main__container">
        <div class="main__header">
          <button class="btn main__button">Sign Up</button>
          <div class="main__header-title">GYM BUDDY</div>
        </div>
        <div class="main__body">
          <div class="signup__container">
            <div class="signup__container-top">
              <div class="signup__block">
                <h2 class="signup__block-name">First Name</h2>
                <input type="text" class="signup__block-input">
              </div>
              <div class="signup__block">
                <h2 class="signup__block-name">Last Name</h2>
                <input type="text" class="signup__block-input">
              </div>
              <div class="signup__block">
                <h2 class="signup__block-name">Age</h2>
                <input type="text" class="signup__block-input">
              </div>
            </div>
            <div class="signup__container-bottom">
                <div class="stats__title">
                  STATS
                </div>
                <div class="stats__header">
                  <div class="stats__header-title">
                    Categories
                  </div>
                  <div class="stats__header-options">
                    <h2>Expertise</h2>
                    <h2>Enjoyment</h2>
                  </div>
                </div>
                <div class="stats__block">
                  <div class="stats__block-title">Weight Lifting</div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                    </select>
                  </div>
                </div>
                <div class="stats__block">
                  <div class="stats__block-title">Cardio</div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                    </select>
                  </div>
                </div>
                <div class="stats__block">
                  <div class="stats__block-title">Yoga</div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                    </select>
                  </div>
                </div>
                <div class="stats__block">
                  <div class="stats__block-title">Body Building</div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                    </select>
                  </div>
                </div>
                <div class="stats__block">
                  <div class="stats__block-title">Swimming</div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  <div class="stats__block-options">
                    <select name="Expertise" class="stats__block-dropdown">
                      <option value="blank"></option>
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                    </select>
                  </div>
                </div>
            </div>
          </div>
            <button class="btn signup__button">Confirm</button>
        </div>
      </div>
    </div>
*/
