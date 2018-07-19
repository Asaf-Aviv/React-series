import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import throttle from 'lodash.throttle';

import './ScrollTop.css';

class ScrollTop extends Component {
  constructor() {
    super();
    this.state = {
      show: 'none'
    };

    this.handleScroll = this.handleScroll.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 200));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 200));
  }
  
  handleScroll() {
    window.scrollY > 450 ? this.setState({ show: 'block' }) : this.setState({ show: 'none' });
  }

  handleClick() {
    var cosParameter = window.scrollY / 2,
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
  }

  render() {
    return (
      <div
        style={{ display: this.state.show }}
        id="scroll-top"
        className="br-5"
        onClick={this.handleClick}
      >
        <Icon>keyboard_arrow_up</Icon>
      </div>
    );
  }
}

export default ScrollTop;