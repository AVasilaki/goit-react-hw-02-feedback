import { Component } from 'react';
import { Feedback } from './feedback/Feedback';
// import { LoginForm } from './loginforn';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeGood = newState =>
    this.setState({
      good: newState,
    });
  changeNeutral = newState =>
    this.setState({
      neutral: newState,
    });
  changeBad = newState =>
    this.setState({
      bad: newState,
    });
  render() {
    const state = this.state;

    return (
      <div>
        <Feedback
          state={state}
          onChangeGood={this.changeGood}
          onChangeNeutral={this.changeNeutral}
          onChangeBad={this.changeBad}
        ></Feedback>
      </div>
    );
  }
}
