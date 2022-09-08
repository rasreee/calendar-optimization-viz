import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CalendarEvents.css";
import { EventPropType, OptimizedTimePropType } from "../../data/types";
import { CalendarEvent } from "./CalendarEvent";

export const CalendarEvents = (props) => {
  // TODO: SOMETHING WITH OPTIMIZED TIMES

  // props.optimizedTimes
  // -- when optimization is off, optimizedTimes is null
  // -- when optimization is on, it's an array of objects EVENTS_OPTIMIZED_INFO found in events.js.
  // -- 'id' is the id of the event the optimized time is associated with

  const eventsToRender = props.optimizedTimes
    ? props.events.map((initialEvent) => {
        const optimizedTime = props.optimizedTimes.find((time) => time.id === initialEvent.id);

        if (!optimizedTime) return initialEvent;

        const newEvent = { ...initialEvent, ...optimizedTime };

        return newEvent;
      })
    : props.events;

  return (
    <div className="CalendarEvents">
      {eventsToRender.map((calendarEvent) => {
        return (
          <CalendarEvent
            key={calendarEvent.id}
            event={calendarEvent}
            contentHeight={props.contentHeight}
            showWeekend={!!props.showWeekend}
            hourStart={props.hourStart}
            hourEnd={props.hourEnd}
          />
        );
      })}
    </div>
  );
};

// PROPTYPES INFORMATION
CalendarEvents.propTypes = {
  events: PropTypes.arrayOf(EventPropType).isRequired,

  optimizedTimes: PropTypes.arrayOf(OptimizedTimePropType),
  // null if preview is off

  contentHeight: PropTypes.number.isRequired,
  // pixel height of the calendar content div
  // useful for calculating heights

  showWeekend: PropTypes.bool.isRequired,
  // default to true
  // useful for knowing how many columns are showing

  hourStart: PropTypes.number.isRequired,
  // default to 8
  // hour that the calendar content starts

  hourEnd: PropTypes.number.isRequired,
  // default to 18
  // hour that the calendar content starts (in 24 hour time)
};
