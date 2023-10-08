import { Component } from 'react';
import { Feedback } from './feedback/Feedback';

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
        <Feedback
          state={state}
          onChangeGood={this.changeGood}
          onChangeNeutral={this.changeNeutral}
          onChangeBad={this.changeBad}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        ></Feedback>
      </div>
    );
  }
}
