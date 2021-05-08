import React, { Component } from 'react';
import { Button, Progress } from 'semantic-ui-react';

export default class aProgressExampleIndicating extends Component {
  state = { percent: 44 }

  increment = () => this.setState((prevState) => ({
    percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
  }))

  render() {
    return (
      <div>
        <h1>Projects will go here</h1>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.increment}>Increment</Button>
      </div>
    );
  }
}
