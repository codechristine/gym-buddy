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
    this.resetSchedule = this.resetSchedule.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    let sundayFrom, sundayTo, mondayFrom, mondayTo, tuesdayFrom, tuesdayTo,
      wednesdayFrom, wednesdayTo, thursdayFrom, thursdayTo, fridayFrom,
      fridayTo, saturdayFrom, saturdayTo;

    if (this.state.isEdit !== prevState.isEdit) {
      fetch(`/api/schedule.php?username=${this.props.view.params.userName}`)
        .then(result => result.json())
        .then(result => {
          if (result.Sunday.length) {
            sundayFrom = '0:00';
            if (result.Sunday[0] !== 0) {
              sundayFrom = result.Sunday[0].toString().split('');
              sundayFrom.splice(sundayFrom.length - 2, 0, ':');
              sundayFrom = sundayFrom.join('');
            }
            sundayTo = '0:00';
            if (result.Sunday[1] !== 0) {
              sundayTo = result.Sunday[1].toString().split('');
              sundayTo.splice(sundayTo.length - 2, 0, ':');
              sundayTo = sundayTo.join('');
            }
          }

          if (result.Monday.length) {
            mondayFrom = '0:00';
            if (result.Monday[0] !== 0) {
              mondayFrom = result.Monday[0].toString().split('');
              mondayFrom.splice(mondayFrom.length - 2, 0, ':');
              mondayFrom = mondayFrom.join('');
            }
            mondayTo = '0:00';
            if (result.Monday[1] !== 0) {
              mondayTo = result.Monday[1].toString().split('');
              mondayTo.splice(mondayTo.length - 2, 0, ':');
              mondayTo = mondayTo.join('');
            }
          }

          if (result.Tuesday.length) {
            tuesdayFrom = '0:00';
            if (result.Tuesday[0] !== 0) {
              tuesdayFrom = result.Tuesday[0].toString().split('');
              tuesdayFrom.splice(tuesdayFrom.length - 2, 0, ':');
              tuesdayFrom = tuesdayFrom.join('');
            }
            tuesdayTo = '0:00';
            if (result.Tuesday[1] !== 0) {
              tuesdayTo = result.Tuesday[1].toString().split('');
              tuesdayTo.splice(tuesdayTo.length - 2, 0, ':');
              tuesdayTo = tuesdayTo.join('');
            }
          }

          if (result.Wednesday.length) {
            wednesdayFrom = '0:00';
            if (result.Wednesday[0] !== 0) {
              wednesdayFrom = result.Wednesday[0].toString().split('');
              wednesdayFrom.splice(wednesdayFrom.length - 2, 0, ':');
              wednesdayFrom = wednesdayFrom.join('');
            }
            wednesdayTo = '0:00';
            if (result.Wednesday[1] !== 0) {
              wednesdayTo = result.Wednesday[1].toString().split('');
              wednesdayTo.splice(wednesdayTo.length - 2, 0, ':');
              wednesdayTo = wednesdayTo.join('');
            }
          }

          if (result.Thursday.length) {
            thursdayFrom = '0:00';
            if (result.Thursday[0] !== 0) {
              thursdayFrom = result.Thursday[0].toString().split('');
              thursdayFrom.splice(thursdayFrom.length - 2, 0, ':');
              thursdayFrom = thursdayFrom.join('');
            }
            thursdayTo = '0:00';
            if (result.Thursday[1] !== 0) {
              thursdayTo = result.Thursday[1].toString().split('');
              thursdayTo.splice(thursdayTo.length - 2, 0, ':');
              thursdayTo = thursdayTo.join('');
            }
          }

          if (result.Friday.length) {
            fridayFrom = '0:00';
            if (result.Friday[0] !== 0) {
              fridayFrom = result.Friday[0].toString().split('');
              fridayFrom.splice(fridayFrom.length - 2, 0, ':');
              fridayFrom = fridayFrom.join('');
            }
            fridayTo = '0:00';
            if (result.Friday[1] !== 0) {
              fridayTo = result.Friday[1].toString().split('');
              fridayTo.splice(fridayTo.length - 2, 0, ':');
              fridayTo = fridayTo.join('');
            }
          }

          if (result.Saturday.length) {
            saturdayFrom = '0:00';
            if (result.Saturday[0] !== 0) {
              saturdayFrom = result.Saturday[0].toString().split('');
              saturdayFrom.splice(saturdayFrom.length - 2, 0, ':');
              saturdayFrom = saturdayFrom.join('');
            }
            saturdayTo = '0:00';
            if (result.Saturday[1] !== 0) {
              saturdayTo = result.Saturday[1].toString().split('');
              saturdayTo.splice(saturdayTo.length - 2, 0, ':');
              saturdayTo = saturdayTo.join('');
            }
          }

          this.setState({
            userName: this.props.view.params.userName,
            firstName: this.props.view.params.firstName,
            lastName: this.props.view.params.lastName,
            age: this.props.view.params.age,
            weightLifting: this.props.view.params.weightLifting,
            cardio: this.props.view.params.cardio,
            yoga: this.props.view.params.yoga,
            bodyBuilding: this.props.view.params.bodyBuilding,
            swimming: this.props.view.params.swimming,
            sundayFrom: sundayFrom || '',
            sundayTo: sundayTo || '',
            mondayFrom: mondayFrom || '',
            mondayTo: mondayTo || '',
            tuesdayFrom: tuesdayFrom || '',
            tuesdayTo: tuesdayTo || '',
            wednesdayFrom: wednesdayFrom || '',
            wednesdayTo: wednesdayTo || '',
            thursdayFrom: thursdayFrom || '',
            thursdayTo: thursdayTo || '',
            fridayFrom: fridayFrom || '',
            fridayTo: fridayTo || '',
            saturdayFrom: saturdayFrom || '',
            saturdayTo: saturdayTo || ''
          });

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
      case 'Username':
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
        this.setState({ yoga: event.target.value });
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

  resetSchedule(name) {
    switch (name) {
      case 'sunday':
        this.setState({ sundayFrom: '', sundayTo: '' });
        break;
      case 'monday':
        this.setState({ mondayFrom: '', mondayTo: '' });
        break;
      case 'tuesday':
        this.setState({ tuesdayFrom: '', tuesdayTo: '' });
        break;
      case 'wednesday':
        this.setState({ wednesdayFrom: '', wednesdayTo: '' });
        break;
      case 'thursday':
        this.setState({ thursdayFrom: '', thursdayTo: '' });
        break;
      case 'friday':
        this.setState({ fridayFrom: '', fridayTo: '' });
        break;
      case 'saturday':
        this.setState({ saturdayFrom: '', saturdayTo: '' });
        break;
    }
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
      yoga: this.state.yoga,
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
      yoga: this.state.yoga,
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
    let errorMessage, buttonName, submitMethod, sundayReset, mondayReset, tuesdayReset,
      wednesdayReset, thursdayReset, fridayReset, saturdayReset;
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
      sundayReset = () => this.resetSchedule('sunday');
      mondayReset = () => this.resetSchedule('monday');
      tuesdayReset = () => this.resetSchedule('tuesday');
      wednesdayReset = () => this.resetSchedule('wednesday');
      thursdayReset = () => this.resetSchedule('thursday');
      fridayReset = () => this.resetSchedule('friday');
      saturdayReset = () => this.resetSchedule('saturday');
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
                <h2 className="signup__block-name">Username</h2>
                <input value={userName} type="text" onChange={this.handleChange} className="signup__block-input" placeholder="Username" maxLength="12" required />
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
                <div className="stats__block-title" onClick={sundayReset}>Sunday</div>
                <TimePicker hourPlaceholder="From" value={sundayFrom} onChange={sundayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={sundayTo} onChange={sundayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title" onClick={mondayReset}>Monday</div>
                <TimePicker hourPlaceholder="From" value={mondayFrom} onChange={mondayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={mondayTo} onChange={mondayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title" onClick={tuesdayReset}>Tuesday</div>
                <TimePicker hourPlaceholder="From" value={tuesdayFrom} onChange={tuesdayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={tuesdayTo} onChange={tuesdayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title" onClick={wednesdayReset}>Wednesday</div>
                <TimePicker hourPlaceholder="From" value={wednesdayFrom} onChange={wednesdayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={wednesdayTo} onChange={wednesdayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title" onClick={thursdayReset}>Thursday</div>
                <TimePicker hourPlaceholder="From" value={thursdayFrom} onChange={thursdayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={thursdayTo} onChange={thursdayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title" onClick={fridayReset}>Friday</div>
                <TimePicker hourPlaceholder="From" value={fridayFrom} onChange={fridayFromMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
                <TimePicker hourPlaceholder="To" value={fridayTo} onChange={fridayToMethod} className="time__block-options" clearIcon={null} clockIcon={null} maxDetail="hour" disableClock={true} />
              </div>
              <div className="stats__block">
                <div className="stats__block-title" onClick={saturdayReset}>Saturday</div>
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
