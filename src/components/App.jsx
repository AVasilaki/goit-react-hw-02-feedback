import { Component } from 'react';
import { Feedback } from './feedback/Feedback';
import { Statistic } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = newState => {
    this.setState(prevState => ({
      [newState]: prevState[newState] + 1,
    }));
  };

  countTotalFeedback = total =>
    (total = this.state.good + this.state.neutral + this.state.bad);

  countPositiveFeedbackPercentage = percentege => {
    const state = this.state;
    const total = state.good + state.neutral + state.bad;

    if (total !== 0) {
      return Math.ceil((percentege = (state.good / total) * 100));
    }
  };

  render() {
    const state = this.state;

    return (
      <div>
        <Feedback leaveFeedback={this.leaveFeedback}></Feedback>
        <Statistic
          state={state}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        ></Statistic>
      </div>
    );
  }
}
