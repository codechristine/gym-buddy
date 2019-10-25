import React from 'react';
import Hour from './hour';

export default class DayContent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // day: '',
    //   startTime: '',
    //   endTime: '',
    //   view: 'currentDay'
    // };
    this.timeArray = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    // prop of workout hours list = an array of numbers that is inside the schedule component
  }
  render() {

    // let hourSchedule = this.props.hourlySchedule;

    // hourSchedule = this.timeArray.map((time, index) => {
    //   let hourPresent = this.props.data.indexOf(time) !== -1;
    //   return <Hour active={hourPresent} key={index} time={time}/>;
    // });

    return (
      <div className="schedule__day-content-container">
        {this.props.hourlySchedule}
        <div className="schedule__day-content-time">
          {this.timeArray.map((hour, index) => {
            return <Hour key={index} hour={hour} />;
          })}
        </div>
      </div>
    );
  }
}
