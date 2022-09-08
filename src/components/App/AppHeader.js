import React, { Component } from "react";
import "./AppHeader.css";
import { ClockIcon } from "../ClockIcon.js";

export class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  render() {
    return (
      <header className="AppHeader">
        <ClockIcon />
      </header>
    );
  }
}
