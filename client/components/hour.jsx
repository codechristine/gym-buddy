import React from 'react';

export default class Hour extends React.Component {
  render() {
    return (
      <div className={this.props.active ? 'activeDay' : ''}>{this.props.hour}</div>
    );
  }
}
