import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./AppHeader.css";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
};


const ClockIcon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classNames("icon", className)} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

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
