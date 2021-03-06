import React, { Component } from 'react';
import arrowUpIcon from '../../icons/arrowUp.svg';
import throttle from 'lodash.throttle';

import './ScrollTop.css';

class ScrollTop extends Component {
  state = {
    show: 'none'
  };

  componentDidMount = () => {
    window.addEventListener('scroll', throttle(this.handleScroll, 200));
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', throttle(this.handleScroll, 200));
  };
  
  handleScroll= () => {
    window.scrollY > 450 ? this.setState({ show: 'block' }) : this.setState({ show: 'none' });
  };

  handleClick = () => {
    let cosParameter = window.scrollY / 2,
      scrollCount = 0,
      oldTimestamp = performance.now();

    function step (newTimestamp) {
      scrollCount += Math.PI / (200 / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  };

  render() {
    return (
      <div
        style={{ display: this.state.show }}
        id="scroll-top"
        className="br-5"
        onClick={this.handleClick}
      >
        <img src={arrowUpIcon} alt="arrow up" />
      </div>
    );
  }
}

export default ScrollTop;
