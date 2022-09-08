import React, { Component } from "react";
import PropTypes from "prop-types";
import { EventPropType } from "../../data/types";
import "./CalendarEvent.css";

/**
 * startHour=8; startMinute: 0; hourStart=8; top: 0%;
 * startHour=8; startMinute: 0; hourStart=8; top: 0%;
 * 
 * startHour=17; startMinute: 30; hourStart=8; hourEnd=18;
 * const range = hourEnd - hourStart (10)
 *  (startHour + toHours(startMinute)) - hourStart = 9.5
 */

const MINUTES_PER_HOUR=60
const toHours = (minutes) => {
  return minutes / MINUTES_PER_HOUR
}

// TODO: finish positioning logic
const getPositionStyles = ({ event, showWeekend, hourStart, hourEnd }) => {
  const columnCount = showWeekend ? 7 : 5;
  const widthNum = 100 / columnCount;
  const width = `calc(${widthNum}% - 6px)`;

  // TODO: position is currently random
  // -- topNum should position the event at the start hour/minute
  // -- leftNum should place it in the correct day
  // -- heightNum should set the height according to the event duration
  const rangeInHours = hourEnd - hourStart
  const startHours = event.startHour + toHours(event.startMinutes)
  

  const topNum = ((startHours - hourStart) / rangeInHours) * 100;
  const leftNum = widthNum * event.dayIndex;

  const durationInHours = toHours(event.durationMinutes)
  const heightNum = (durationInHours / rangeInHours) * 100;

  // note: the below assumes that you're calculating these numbers to be percentages
  // there are other reasonable approaches, but you'll have to edit the below if not using percentages
  const left = `calc(${leftNum}% + 1px)`;
  const top = `${topNum}%`;

  const height = `calc(${heightNum}% - 2px)`; // leave a 2px gap below the event to distinguish adjacent events visually
  return {
    top,
    left,
    width,
    maxWidth: width,
    height,
  };
};

const getTimeLabel = (event) => {
  const date = new Date();
  date.setHours(event.startHour);
  date.setMinutes(event.startMinutes);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toLowerCase();
};

export const CalendarEvent = (props) => {
  const positionStyles = getPositionStyles(props);
  return (
    <div className="CalendarEvent" style={positionStyles}>
      <div className="CalendarEvent-title">{props.event.title}</div>
      <div className="CalendarEvent-time">{getTimeLabel(props.event)}</div>
    </div>
  );
};

// SEE CalendarEvents.js for more PROPTYPES INFORMATION
CalendarEvent.propTypes = {
  event: EventPropType,
  showWeekend: PropTypes.bool.isRequired,
  hourStart: PropTypes.number.isRequired,
  hourEnd: PropTypes.number.isRequired,
};
