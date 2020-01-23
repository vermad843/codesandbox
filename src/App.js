import React, { Component } from "react";
import Pres from "./Pres";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    fetch("https://swapi.co/api/people/1")
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        <Pres character={data} />
      </div>
    );
  }
}

export default App;
