import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CalendarBackground.css";

export class CalendarBackground extends Component {
  getColumnCount = () => {
    return this.props.showWeekend ? 7 : 5;
  };

  getRowCount = () => {
    return this.props.hourEnd - this.props.hourStart;
  };

  generateContainerStyles = (height, columnCount, rowCount) => {
    return {
      height: `${height}px`,
      gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
      gridTemplateRows: `repeat(${rowCount}, 1fr)`,
    };
  };

  render() {
    const columnCount = this.getColumnCount();
    const rowCount = this.getRowCount();
    const cellCount = columnCount * rowCount;
    const containterStyles = this.generateContainerStyles(
      this.props.contentHeight,
      columnCount,
      rowCount,
    );

    return (
      <div className="CalendarBackground" style={containterStyles}>
        {[...Array(cellCount).keys()].map((n) => {
          return <div key={n} className="CalendarBackground-cell" />;
        })}
      </div>
    );
  }
}

CalendarBackground.propTypes = {
  contentHeight: PropTypes.number.isRequired,
  showWeekend: PropTypes.bool.isRequired,
  hourStart: PropTypes.number.isRequired,
  hourEnd: PropTypes.number.isRequired,
};
