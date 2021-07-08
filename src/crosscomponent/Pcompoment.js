import React, { Component } from "react";
import PropTypes from "prop-types";
import Sub from "./Sub";
export default class Pcompoment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }
  // 父组件声明自己支持 context
  static childContextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func,
    callback1: PropTypes.func
  };
  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext() {
    return {
      color: this.state.color,
      callback: this.callback.bind(this),
      callback1: this.callback1.bind(this)
    };
  }

  callback(msg) {
    console.log(msg);
  }
  callback1(color) {
    this.setState({
      color
    });
  }

  render() {
    return (
      <div>
        <Sub></Sub>
      </div>
    );
  }
}
