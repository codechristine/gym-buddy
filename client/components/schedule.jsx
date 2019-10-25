import React from 'react';
import DayContent from './day-content';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'currentDay'
    };
    // proprerty will have schedule of hours with an object w/ nested arrays for each day

    this.toggleTab = this.toggleTab.bind(this);
  }
  toggleTab(view) {
    this.setState({
      view: view
    });
  }
  render() {
    const toggleTabSunday = () => this.toggleTab('sunday');
    const toggleTabMonday = () => this.toggleTab('monday');
    const toggleTabTuesday = () => this.toggleTab('tuesday');
    const toggleTabWednesday = () => this.toggleTab('wednesday');
    const toggleTabThursday = () => this.toggleTab('thursday');
    const toggleTabFriday = () => this.toggleTab('friday');
    const toggleTabSaturday = () => this.toggleTab('saturday');
    let sundayClass = 'weekday__tablink';
    let mondayClass = 'weekday__tablink';
    let tuesdayClass = 'weekday__tablink';
    let wednesdayClass = 'weekday__tablink';
    let thursdayClass = 'weekday__tablink';
    let fridayClass = 'weekday__tablink';
    let saturdayClass = 'weekday__tablink';
    const { view } = this.state;
    let element;
    // let hourlySchedule = {
    //   [
    //     time: null;
    //   ]
    // };

    switch (view) {
      case 'sunday':
        sundayClass = 'weekday__tablink selected';
        element =
        <div className="test1">
          <DayContent hourlySchedule={this.props.hourlySchedule} />
        </div>;
        break;
      case 'monday':
        mondayClass = 'weekday__tablink selected';
        element =
          <div className="test2">
            <DayContent hourlySchedule={this.props.hourlySchedule} />
          </div>;
        break;
      case 'tuesday':
        tuesdayClass = 'weekday__tablink selected';
        element =
          <div className="test1">
            <DayContent hourlySchedule={this.props.hourlySchedule} />
          </div>;
        break;
      case 'wednesday':
        wednesdayClass = 'weekday__tablink selected';
        element =
          <div className="test2">
            <DayContent hourlySchedule={this.props.hourlySchedule} />
          </div>;
        break;
      case 'thursday':
        thursdayClass = 'weekday__tablink selected';
        element =
          <div className="test1">
            <DayContent hourlySchedule={this.props.hourlySchedule} />
          </div>;
        break;
      case 'friday':
        fridayClass = 'weekday__tablink selected';
        element =
          <div className="test2">
            <DayContent hourlySchedule={this.props.hourlySchedule} />
          </div>;
        break;
      case 'saturday':
        saturdayClass = 'weekday__tablink selected';
        element =
          <div className="test1">
            <DayContent hourlySchedule={this.props.hourlySchedule} />
          </div>;
        break;
    }

    return (
      <div className="schedule__container">
        <div className="weekday__tablink">
          <button className={sundayClass} onClick={toggleTabSunday}> SU </button>
          <button className={mondayClass} onClick={toggleTabMonday}> M </button>
          <button className={tuesdayClass} onClick={toggleTabTuesday}> T </button>
          <button className={wednesdayClass} onClick={toggleTabWednesday}> W </button>
          <button className={thursdayClass} onClick={toggleTabThursday}> TH </button>
          <button className={fridayClass} onClick={toggleTabFriday}> F </button>
          <button className={saturdayClass} onClick={toggleTabSaturday}> SA </button>
        </div>
        <div className="schedule__content-container">
          {/* <DayContent /> */}
          {element}
        </div>
      </div>
    );
  }
}
