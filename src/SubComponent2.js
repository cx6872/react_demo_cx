import React from "react";
class Sub2 extends React.Component {
  doSomething = () => {
    console.log("Sub2 method doSomething, test");
  };
  render() {
    return (
      <div>
        <button>Sub2</button>
      </div>
    );
  }
}
export default Sub2;
