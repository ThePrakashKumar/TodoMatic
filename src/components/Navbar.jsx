import React from "react";
class Navbar extends React.Component {
  componentDidMount() {
    console.log("Navbar Mounted!");
  }
  render() {
    return (
      <nav className="py-6">
        <h1 className="text-3xl font-bold text-center">TodoMatic</h1>
      </nav>
    );
  }
}

export default Navbar;
