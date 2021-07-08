import React from "react";
import Button from "./button";
class Toolbar extends React.Component {
  render() {
    console.log("Toolbar render");
    return (
      <div>
        <Button />
      </div>
    );
  }
}
export default Toolbar;
