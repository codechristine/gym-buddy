import React from 'react';

class Expertise extends React.Component {
  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="expertise__container">
        <div className="expertise__card">
          <div className="expertise__card-name">
            Weight Lifting:
          </div>
          <div className="expertise__card-value">
            {currentUser.weightlifting}
          </div>
        </div>
        <div className="expertise__card">
          <div className="expertise__card-name">
            Cardio:
          </div>
          <div className="expertise__card-value">
            {currentUser.cardio}
          </div>
        </div>
        <div className="expertise__card">
          <div className="expertise__card-name">
            Yoga:
          </div>
          <div className="expertise__card-value">
            {currentUser.yoga}
          </div>
        </div>
        <div className="expertise__card">
          <div className="expertise__card-name">
            Body Building:
          </div>
          <div className="expertise__card-value">
            {currentUser.bodybuilding}
          </div>
        </div>
        <div className="expertise__card">
          <div className="expertise__card-name">
            Swimming
          </div>
          <div className="expertise__card-value">
            {currentUser.swimming}
          </div>
        </div>
      </div>
    );
  }
}

export default Expertise;
