import React from "react";

class Navbar extends React.Component {
  componentDidMount() {
    console.log("Navbar Mounted!");
  }
  render() {
    return <h2>TodoMatic</h2>;
  }
}

export default Navbar;
