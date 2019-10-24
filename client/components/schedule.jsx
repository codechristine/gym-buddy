import React from 'react';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="schedule__container">
        <div className="schedule__weekdays">
          <div className="schedule__weekday_mon">
            <button className="tablink" onClick="openPage('Mon', this, 'red')">SU</button>
            {/* <h2>S</h2> */}
          </div>
          <div className="schedule__weekday_mon">
            <button className="tablink" onClick="openPage('Mon', this, 'red')">M</button>
            {/* <h2>M</h2> */}
          </div>
          <div className="schedule__weekday_tues">
            <button className="tablink" onClick="openPage('Mon', this, 'red')">T</button>
            {/* <h2>T</h2> */}
          </div>
          <div className="schedule__weekday_wed">
            <button className="tablink" onClick="openPage('Mon', this, 'red')">W</button>
            {/* <h2>W</h2> */}
          </div>
          <div className="schedule__weekday_thur">
            <button className="tablink" onClick="openPage('Mon', this, 'red')">TH</button>
            {/* <h2>TH</h2> */}
          </div>
          <div className="schedule__weekday_thur">
            <button className="tablink" onClick="openPage('Mon', this, 'red')">F</button>
            {/* <h2>F</h2> */}
          </div>
          <div className="schedule__weekday_thur">
            <button className="tablink" onClick="openPage('Mon', this, 'red')">SA</button>
            {/* <h2>SA</h2> */}
          </div>
        </div>
        <div className="schedule__time">
          <h2>Time</h2>
        </div>
      </div>

    );
  }
}
