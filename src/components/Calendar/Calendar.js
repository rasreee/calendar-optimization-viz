import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Calendar.css";
import { CalendarTimeline } from "./CalendarTimeline";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBackground } from "./CalendarBackground";
import { CalendarEvents } from "../CalendarEvents";

export class Calendar extends Component {
  render() {
    const contentHeight = 600;

    return (
      <div className="Calendar">
        <div /> {/* upper left corner placeholder */}
        <CalendarHeader showWeekend={!!this.props.showWeekend} />
        <CalendarTimeline
          contentHeight={contentHeight}
          hourStart={this.props.hourStart}
          hourEnd={this.props.hourEnd}
        />
        <div className="Calendar-content">
          <CalendarBackground
            contentHeight={contentHeight}
            showWeekend={!!this.props.showWeekend}
            hourStart={this.props.hourStart}
            hourEnd={this.props.hourEnd}
          />
          <CalendarEvents contentHeight={contentHeight} {...this.props} />
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
  showWeekend: PropTypes.bool.isRequired,
  hourStart: PropTypes.number.isRequired,
  hourEnd: PropTypes.number.isRequired,
  optimizedTimes: PropTypes.array,
};
