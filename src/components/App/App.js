import React, { Component } from "react";
import "./App.css";
import { AppHeader } from "./AppHeader";
import { Calendar } from "../Calendar";
import { getEvents, getOptimizedStartTimes } from "../../data/events";

export class App extends Component {
  constructor(props) {
    super(props);
    // could make UI to customize these defaults
    const showWeekend = true;
    const hourStart = 8;
    const hourEnd = 18;
    const previewOn = false;
    // get events and setup state
    const events = getEvents();
    this.state = {
      events,
      showWeekend,
      hourStart,
      hourEnd,
      previewOn,
      optimizedTimes: null,
    };
  }

  togglePreview = () => {
    const previewOn = !this.state.previewOn;
    const optimizedTimes = previewOn ? getOptimizedStartTimes() : null;
    this.setState({ previewOn, optimizedTimes });
  };

  render() {
    const badgeColor = this.state.previewOn ? "green" : "red";
    return (
      <div className="App">
        <AppHeader />
        <div className="App-toolbar">
          <button onClick={this.togglePreview}>Toggle Optimization Preview</button>
          <div className="App-toolbar-previewBadge" style={{ backgroundColor: badgeColor }} />
          <div className="App-toolbar-previewLabel">{this.state.previewOn ? "ON" : "OFF"}</div>
        </div>
        <Calendar {...this.state} />
      </div>
    );
  }
}
