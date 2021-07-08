import React from "react";
// import CountContext from "./App";
import CountContext from "./contextt";
class Button extends React.Component {
  render() {
    console.log("Button outer render");
    return (
      // 使用Consumer跨组件消费数据
      <CountContext.Consumer>
        {(count) => {
          // 在Consumer中，受到Provider提供数据的影响
          console.log("Button render");
          return <div>{count}</div>;
        }}
      </CountContext.Consumer>
    );
  }
}
export default Button;
