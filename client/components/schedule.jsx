import React from 'react';
import Hour from './hour';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'sunday',
      scheduleObj: {}
    };
    // this.timeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    this.timeArray = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.toggleTab = this.toggleTab.bind(this);
  }
  componentDidMount() {
    this.getHours();
  }
  getHours() {
    fetch('/api/schedule.php')
      .then(result => result.json())
      .then(result => {
        this.setState({
          scheduleObj: result
        });
      });
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
    const { view, scheduleObj } = this.state;
    let sundayClass, mondayClass, tuesdayClass, wednesdayClass, thursdayClass, fridayClass, saturdayClass, passedInData;

    switch (view) {
      case 'sunday':
        sundayClass = 'tab__selected';
        passedInData = scheduleObj.sunday;
        break;
      case 'monday':
        mondayClass = 'tab__selected';
        passedInData = scheduleObj.monday;
        break;
      case 'tuesday':
        tuesdayClass = 'tab__selected';
        passedInData = scheduleObj.tuesday;
        break;
      case 'wednesday':
        wednesdayClass = 'tab__selected';
        passedInData = scheduleObj.wednesday;
        break;
      case 'thursday':
        thursdayClass = 'tab__selected';
        passedInData = scheduleObj.thursday;
        break;
      case 'friday':
        fridayClass = 'tab__selected';
        passedInData = scheduleObj.friday;
        break;
      case 'saturday':
        saturdayClass = 'tab__selected';
        passedInData = scheduleObj.saturday;
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
          {
            this.timeArray.map((element, index) => {
              return <Hour key={index} time={this.timeArray[index]} index={index} data={passedInData} />;
            })
          }
        </div>
      </div>
    );
  }
}
