import React, { Component } from "react";
import "./Nightmode.css";

// Night Mode Toggle

function nightToggle() {
  if (document.body.className === "") {
    document.body.className = "dark";
  } else {
    document.body.className = "";
  }
}

//Night Mode Button
class NightMode extends Component {
  render() {
    return (
      <div className="container">
        <button onClick={nightToggle}>Night Mode</button>
      </div>
    );
  }
}

export default NightMode;
