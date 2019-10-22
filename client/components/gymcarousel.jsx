import React from 'react';

class GymCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goHere = this.goHere.bind(this);
    this.photoArray = null;
  }

  goRight() {
    if (this.state.index < this.photoArray.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  }

  goLeft() {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
      });
    } else {
      this.setState({
        index: this.photoArray.length - 1
      });
    }
  }

  goHere(dotIndex) {
    this.setState({
      index: dotIndex
    });
  }

  render() {
    const { index } = this.state;
    this.photoArray = this.props.photoArray;

    return (
      <div className={`gym__carousel`} style={{ backgroundImage: `url(${this.photoArray[index]})` }}>
        <i className="icon__arrow fas fa-chevron-left" onClick={this.goLeft}></i>
        {
          this.photoArray.map((element, dotIndex) => {
            let className = dotIndex === index ? 'fas' : 'far';
            const handleClick = () => this.goHere(dotIndex);
            return (
              <i key={dotIndex}
                className={`icon__dot ${className} fa-circle`}
                onClick={handleClick}
              ></i>
            );
          })
        }
        <i className="icon__arrow fas fa-chevron-right" onClick={this.goRight}></i>
      </div>
    );
  }
}

export default GymCarousel;
