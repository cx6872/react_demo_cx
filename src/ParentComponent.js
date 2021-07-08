import React, { Component } from "react";
import Sub from "./SubComponent.js";
import Sub1 from "./SubComponent1.js";
import Sub2 from "./SubComponent2.js";
export default class ParentComponent extends Component {
  funca(msg) {
    console.log(msg);
    alert("sub buttom clicked,funca");
  }
  funcb = (msg) => {
    console.log(msg);
    alert("sub buttom clicked,funcb");
  };
  envokesub2 = (msg) => {
    this.Sub2.doSomething();
  };
  componentDidMount() {
    console.log("ParentComponent componentDidMount");
  }
  // shouldComponentUpdate() {
  //   console.log("ParentComponent shouldComponentUpdate");
  // }
  // componentDidUpdate() {
  //   console.log("ParentComponent componentDidUpdate");
  // }
  componentWillUnmount() {
    console.log("ParentComponent componentWillUnmount");
  }
  render() {
    console.log("ParentComponent render a");
    return (
      <div>
        <div>
          <Sub title="父组件通过向子组件传递 props，子组件得到 props 后进行相应的处理" />
        </div>
        <Sub1 callback={this.funca.bind(this)} />
        <Sub1 callback={this.funca} />
        <Sub1 callback={this.funcb} />
        <Sub2
          ref={(Sub2) => {
            this.Sub2 = Sub2;
          }}
        />
        <button onClick={this.envokesub2}>button1</button>
      </div>
    );
  }
}
