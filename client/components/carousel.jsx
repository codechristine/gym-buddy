import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.interval = null;
    this.className = null;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  goRight() {
    if (this.state.index < 4) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  }

  render() {
    let { index } = this.state;

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.goRight();
    }, 3000);

    return (
      <div className={ `main__carousel background-${index}` }>
        <div className="main__carousel-header">
          GYM
        </div>
        <div className="main__carousel-header">
          BUDDY
        </div>
      </div>
    );
  }
}

export default Carousel;
