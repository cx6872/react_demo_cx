import React from "react";
const Sub1 = (props) => {
  const cb = (msg) => {
    return () => {
      props.callback(msg);
    };
  };

  return (
    <div>
      <button onClick={cb("我们通信把")}>sub1 buttom</button>
    </div>
  );
};
export default Sub1;
