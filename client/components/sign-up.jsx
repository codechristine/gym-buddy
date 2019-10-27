import React from 'react';
import Header from './header';
import TimePicker from 'react-time-picker';

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
      swimming: '',
      sundayFrom: '',
      sundayTo: '',
      mondayFrom: '',
      mondayTo: '',
      tuesdayFrom: '',
      tuesdayTo: '',
      wednesdayFrom: '',
      wednesdayTo: '',
      thursdayFrom: '',
      thursdayTo: '',
      fridayFrom: '',
      fridayTo: '',
      saturdayFrom: '',
      saturdayTo: '',
      inEdit: false
    };
    this.containerRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDropDown = this.handleChangeDropDown.bind(this);
    this.handleScheduleChange = this.handleScheduleChange.bind(this);
    this.insertSchedule = this.insertSchedule.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isEdit !== prevState.isEdit) {
      this.setState({
        userName: this.props.view.params.userName,
        firstName: this.props.view.params.firstName,
        lastName: this.props.view.params.lastName,
        age: this.props.view.params.age,
        weightLifting: this.props.view.params.weightLifting,
        cardio: this.props.view.params.cardio,
        yoga: this.props.view.params.yoga,
        bodyBuilding: this.props.view.params.bodyBuilding,
        swimming: this.props.view.params.swimming
      });
    }
  }
  componentDidMount() {
    if (this.props.view.prevName === 'profile') {
      this.setState({
        isEdit: true
      });
    }
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

  handleScheduleChange(time, stateName) {
    if (time) {
      // const newTime = time.split(':')[0];
      switch (stateName) {
        case 'sundayFrom':
          this.setState({ sundayFrom: time });
          break;
        case 'sundayTo':
          this.setState({ sundayTo: time });
          break;
        case 'mondayFrom':
          this.setState({ mondayFrom: time });
          break;
        case 'mondayTo':
          this.setState({ mondayTo: time });
          break;
        case 'tuesdayFrom':
          this.setState({ tuesdayFrom: time });
          break;
        case 'tuesdayTo':
          this.setState({ tuesdayTo: time });
          break;
        case 'wednesdayFrom':
          this.setState({ wednesdayFrom: time });
          break;
        case 'wednesdayTo':
          this.setState({ wednesdayTo: time });
          break;
        case 'thursdayFrom':
          this.setState({ thursdayFrom: time });
          break;
        case 'thursdayTo':
          this.setState({ thursdayTo: time });
          break;
        case 'fridayFrom':
          this.setState({ fridayFrom: time });
          break;
        case 'fridayTo':
          this.setState({ fridayTo: time });
          break;
        case 'saturdayFrom':
          this.setState({ saturdayFrom: time });
          break;
        case 'saturdayTo':
          this.setState({ saturdayTo: time });
          break;
      }
    }
  }

  clearInputs() {
    this.containerRef.current.scrollTop = 0;
    this.setState({
      userName: ''
      // firstName: '',
      // lastName: '',
      // age: '',
      // weightLifting: '',
      // cardio: '',
      // yoga: '',
      // bodyBuilding: '',
      // swimming: '',
      // sundayFrom: '',
      // sundayTo: '',
      // mondayFrom: '',
      // mondayTo: '',
      // tuesdayFrom: '',
      // tuesdayTo: '',
      // wednesdayFrom: '',
      // wednesdayTo: '',
      // thursdayFrom: '',
      // thursdayTo: '',
      // fridayFrom: '',
      // fridayTo: '',
      // saturdayFrom: '',
      // saturdayTo: ''
    });
  }

  insertSchedule(scheduleObj) {
    fetch('/api/schedule.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(scheduleObj) })
      .then(result => result.json())
      .then(result => {
        return result;
      });
  }

  deleteSchedule(userObj) {
    fetch('/api/schedule.php', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userObj) })
      .then(result => result.json())
      .then(result => {
        return result;
      });
  }

  createUser(userObj) {
    const dayArray = [
      {
        username: this.state.userName,
        day: 'Sunday',
        startTime: this.state.sundayFrom.split(':').join('') || '',
        endTime: this.state.sundayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Monday',
        startTime: this.state.mondayFrom.split(':').join('') || '',
        endTime: this.state.mondayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Tuesday',
        startTime: this.state.tuesdayFrom.split(':').join('') || '',
        endTime: this.state.tuesdayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Wednesday',
        startTime: this.state.wednesdayFrom.split(':').join('') || '',
        endTime: this.state.wednesdayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Thursday',
        startTime: this.state.thursdayFrom.split(':').join('') || '',
        endTime: this.state.thursdayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Friday',
        startTime: this.state.fridayFrom.split(':').join('') || '',
        endTime: this.state.fridayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Saturday',
        startTime: this.state.saturdayFrom.split(':').join('') || '',
        endTime: this.state.saturdayTo.split(':').join('') || ''
      }
    ];

    fetch('/api/user.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userObj) })
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          this.props.setView('signup', 'home', result);
        } else {
          this.props.setView('login', 'home', result);
          dayArray.forEach(e => this.insertSchedule(e));
        }
      });
  }

  updateUser(userObj) {
    const dayArray = [
      {
        username: this.state.userName,
        day: 'Sunday',
        startTime: this.state.sundayFrom.split(':').join('') || '',
        endTime: this.state.sundayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Monday',
        startTime: this.state.mondayFrom.split(':').join('') || '',
        endTime: this.state.mondayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Tuesday',
        startTime: this.state.tuesdayFrom.split(':').join('') || '',
        endTime: this.state.tuesdayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Wednesday',
        startTime: this.state.wednesdayFrom.split(':').join('') || '',
        endTime: this.state.wednesdayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Thursday',
        startTime: this.state.thursdayFrom.split(':').join('') || '',
        endTime: this.state.thursdayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Friday',
        startTime: this.state.fridayFrom.split(':').join('') || '',
        endTime: this.state.fridayTo.split(':').join('') || ''
      },
      {
        username: this.state.userName,
        day: 'Saturday',
        startTime: this.state.saturdayFrom.split(':').join('') || '',
        endTime: this.state.saturdayTo.split(':').join('') || ''
      }
    ];

    fetch('/api/user-edit.php', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userObj) })
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          this.props.setView('signup', 'profile', result);
        } else {
          this.deleteSchedule(result[0]);
          this.props.setUser(result[0]);
          this.props.setView('profile', 'home', {});
          dayArray.forEach(e => this.insertSchedule(e));
        }
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const userObj = {
      username: this.state.userName,
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      age: this.state.age,
      weightlifting: this.state.weightLifting,
      cardio: this.state.cardio,
      yoga: this.state.cardio,
      bodybuilding: this.state.bodyBuilding,
      swimming: this.state.swimming
    };
    this.createUser(userObj);
    this.clearInputs();
  }

  handleEdit(event) {
    event.preventDefault();
    const userObj = {
      username: this.state.userName,
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      age: this.state.age,
      weightlifting: this.state.weightLifting,
      cardio: this.state.cardio,
      yoga: this.state.cardio,
      bodybuilding: this.state.bodyBuilding,
      swimming: this.state.swimming,
      id: this.props.view.params.id,
      prevname: this.props.view.params.userName
    };
    this.updateUser(userObj);
    this.clearInputs();
  }

  render() {
    const { userName, firstName, lastName, age, weightLifting,
      cardio, yoga, bodyBuilding, swimming, sundayFrom, sundayTo,
      mondayFrom, mondayTo, tuesdayFrom, tuesdayTo, wednesdayFrom,
      wednesdayTo, thursdayFrom, thursdayTo, fridayFrom, fridayTo,
      saturdayFrom, saturdayTo, isEdit } = this.state;
    let errorMessage, buttonName, submitMethod;
    const sundayFromMethod = value => this.handleScheduleChange(value, 'sundayFrom');
    const sundayToMethod = value => this.handleScheduleChange(value, 'sundayTo');
    const mondayFromMethod = value => this.handleScheduleChange(value, 'mondayFrom');
    const mondayToMethod = value => this.handleScheduleChange(value, 'mondayTo');
    const tuesdayFromMethod = value => this.handleScheduleChange(value, 'tuesdayFrom');
    const tuesdayToMethod = value => this.handleScheduleChange(value, 'tuesdayTo');
    const wednesdayFromMethod = value => this.handleScheduleChange(value, 'wednesdayFrom');
    const wednesdayToMethod = value => this.handleScheduleChange(value, 'wednesdayTo');
    const thursdayFromMethod = value => this.handleScheduleChange(value, 'thursdayFrom');
    const thursdayToMethod = value => this.handleScheduleChange(value, 'thursdayTo');
    const fridayFromMethod = value => this.handleScheduleChange(value, 'fridayFrom');
    const fridayToMethod = value => this.handleScheduleChange(value, 'fridayTo');
    const saturdayFromMethod = value => this.handleScheduleChange(value, 'saturdayFrom');
    const saturdayToMethod = value => this.handleScheduleChange(value, 'saturdayTo');
    if (this.props.view.params.error) {
      errorMessage = this.props.view.params.error;
    }

    if (isEdit) {
      buttonName = 'Update';
      submitMethod = this.handleEdit;
    } else {
      buttonName = 'Confirm';
      submitMethod = this.handleSubmit;
    }

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} />
        <form className="main__body" onSubmit={submitMethod}>
          <div className="signup__container" ref={this.containerRef}>
            <div className="signup__container-top">
              <div className="stats__title">
                User
              </div>
              <div className="signup__block">
                <h2 className="signup__block-name">User Name</h2>
                <input value={userName} type="text" onChange={this.handleChange} className="signup__block-input" placeholder="User Name" maxLength="14" required />
              </div>
              <div className="signup__error">{errorMessage}</div>
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
                <input value={age} type="Number" onChange={this.handleChange} className="signup__block-input" placeholder="Age" min="18" max="100" required/>
              </div>
            </div>
            <div className="signup__container-middle">
              <div className="stats__title">
                Stats
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
                <div className="stats__block-title">Weight Lifting</div>
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
            <div className="signup__container-bottom">
              <div className="stats__title">
                Schedule
              </div>
              <div className="stats__header">
                <div className="stats__header-title">
                  Day
                </div>
                <div className="stats__header-options">
                  Time
                </div>
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Sunday</div>
                <TimePicker hourPlaceholder="From" value={sundayFrom} onChange={sundayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={sundayTo} onChange={sundayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Monday</div>
                <TimePicker hourPlaceholder="From" value={mondayFrom} onChange={mondayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={mondayTo} onChange={mondayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Tuesday</div>
                <TimePicker hourPlaceholder="From" value={tuesdayFrom} onChange={tuesdayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={tuesdayTo} onChange={tuesdayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Wednesday</div>
                <TimePicker hourPlaceholder="From" value={wednesdayFrom} onChange={wednesdayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={wednesdayTo} onChange={wednesdayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Thursday</div>
                <TimePicker hourPlaceholder="From" value={thursdayFrom} onChange={thursdayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={thursdayTo} onChange={thursdayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Friday</div>
                <TimePicker hourPlaceholder="From" value={fridayFrom} onChange={fridayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={fridayTo} onChange={fridayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title">Saturday</div>
                <TimePicker hourPlaceholder="From" value={saturdayFrom} onChange={saturdayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={saturdayTo} onChange={saturdayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
            </div>
          </div>
          <button type="submit" className="btn signup__button">{buttonName}</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
