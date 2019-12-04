import React from 'react';

export default class Hour extends React.Component {
  render() {
    let status = 'A.M.';
    const index = this.props.index;
    const time = this.props.time;
    const data = this.props.data;
    let className;

    if (data) {
      if (data.length) {
        className = data.includes(index) ? ' hour__selected' : '';
      }
    }

    if (index >= 12) {
      status = 'P.M.';
    }
    return (
      <div className={`hour__card ${className}`}>
        <div className="hour__card-number">{`${time}:00 ${status}`}</div>
      </div>
    );
  }
}
