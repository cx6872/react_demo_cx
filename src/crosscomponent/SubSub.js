import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SubSub extends Component {
  // 子组件声明自己需要使用 context
  static contextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func,
    callback1: PropTypes.func
  };
  render() {
    const style = { color: this.context.color };
    const cb = (msg) => {
      return () => {
        this.context.callback(msg);
      };
    };
    const cb1 = (color) => {
      return () => {
        this.context.callback1(color);
      };
    };
    return (
      <div style={style}>
        SUBSUB
        <button onClick={cb("onclick on subsub button")}>buttom1</button>
        <button onClick={cb1("blue")}>buttom2</button>
      </div>
    );
  }
}
