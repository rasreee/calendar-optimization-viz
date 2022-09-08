import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CalendarHeader.css";

export class CalendarHeader extends Component {
  getDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return this.props.showWeekend ? days : days.slice(1, 6);
  };

  render() {
    return (
      <div className="CalendarHeader">
        {this.getDays().map((d) => (
          <div className="CalendarHeader-cell" key={d}>
            {d}
          </div>
        ))}
      </div>
    );
  }
}

CalendarHeader.propTypes = {
  showWeekend: PropTypes.bool.isRequired,
};
