import { Component } from 'react';
import { Feedback } from './feedback/Feedback';
// import { LoginForm } from './loginforn';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const state = this.state;

    return (
      <div>
        <Feedback state={state}></Feedback>
      </div>
    );
  }
}
