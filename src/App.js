import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.weatherState = {
      date: Date.now(),
      Weather: 75,
      city: "Georgia",
      country: "Us"
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <h1>Weathy</h1>
      </div>
    );
  }
}
