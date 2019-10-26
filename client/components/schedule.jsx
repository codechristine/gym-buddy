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
  findNumbersInBetween(array) {
    let newArray = [];
    for (let i = array[0]; i <= array[array.length - 1]; i++) {
      newArray.push(i);
    }
    return newArray;
  }
  chunkArray(array, size) {
    let newArray = [];
    if (array) {
      for (let i = 0; i < array.length; i++) {
        const last = newArray[newArray.length - 1];
        if (!last || last.length === size) {
          newArray.push([array[i]]);
        } else {
          last.push(array[i]);
        }
      }
    }
    return newArray;
  }
  filterArray(array) {
    const chunkedArray = this.chunkArray(array, 2);
    let newArray = [];
    if (array) {
      for (let i = 0; i < chunkedArray.length; i++) {
        let tempResult = this.findNumbersInBetween(chunkedArray[i]);
        let numbers = tempResult.map(e => parseInt(e));
        for (let j = 0; j < numbers.length; j++) {
          newArray.push(numbers[j]);
        }
      }
      return newArray;
    }
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
    const scheduleKeys = Object.keys(scheduleObj);
    let sundayClass, mondayClass, tuesdayClass, wednesdayClass, thursdayClass, fridayClass, saturdayClass, passedInData, element;

    switch (view) {
      case 'sunday':
        sundayClass = 'tab__selected';
        passedInData = this.filterArray(scheduleObj.sunday);
        break;
      case 'monday':
        mondayClass = 'tab__selected';
        passedInData = this.filterArray(scheduleObj.monday);
        break;
      case 'tuesday':
        tuesdayClass = 'tab__selected';
        passedInData = this.filterArray(scheduleObj.tuesday);
        break;
      case 'wednesday':
        wednesdayClass = 'tab__selected';
        passedInData = this.filterArray(scheduleObj.wednesday);
        break;
      case 'thursday':
        thursdayClass = 'tab__selected';
        passedInData = this.filterArray(scheduleObj.thursday);
        break;
      case 'friday':
        fridayClass = 'tab__selected';
        passedInData = this.filterArray(scheduleObj.friday);
        break;
      case 'saturday':
        saturdayClass = 'tab__selected';
        passedInData = this.filterArray(scheduleObj.saturday);
        break;
    }

    if (!scheduleKeys.length) {
      return (
        <div className="schedule__container">
          <div className="schedule__none">
            No Schedule Set
          </div>
        </div>
      );
    }

    if (typeof passedInData === 'object') {
      if (!passedInData.length) {
        element = <div className="schedule__container" >
          <div className="schedule__skip">
            Not working out on this day
          </div>
        </div>;
      } else {
        element = this.timeArray.map((element, index) => {
          return <Hour key={index} time={this.timeArray[index]} index={index} data={passedInData} />;
        });
      }
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
          { element }
        </div>
      </div>
    );
  }
}
