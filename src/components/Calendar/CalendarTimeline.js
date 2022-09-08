import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CalendarTimeline.css";

export class CalendarTimeline extends Component {
  getLabels = () => {
    const { hourStart, hourEnd } = this.props;
    let labels = [];
    for (let hour = hourStart + 1; hour < hourEnd + 1; hour++) {
      const isAm = hour < 12;
      const labelHour = isAm ? hour : hour - 12;
      const labelAmPm = isAm ? "am" : "pm";
      const label = hour === 12 ? "noon" : labelHour + labelAmPm;
      labels.push(label);
    }
    return labels;
  };

  getContainerStyles = () => {
    const rowCount = this.props.hourEnd - this.props.hourStart;
    const rowHeight = this.props.contentHeight / rowCount;
    return {
      gridTemplateRows: `repeat(${rowCount}, 1fr)`,
      transform: `translateY(${rowHeight / 2}px)`,
    };
  };

  render() {
    const styles = this.getContainerStyles();
    return (
      <div className="CalendarTimeline" style={styles}>
        {this.getLabels().map((label) => (
          <div className="CalendarTimeline-cell" key={label}>
            {label}
          </div>
        ))}
      </div>
    );
  }
}

CalendarTimeline.propTypes = {
  contentHeight: PropTypes.number.isRequired,
  hourStart: PropTypes.number.isRequired,
  hourEnd: PropTypes.number.isRequired,
};
