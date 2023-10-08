export const Feedback = ({
  state: { good, neutral, bad },
  onChangeGood,
  onChangeNeutral,
  onChangeBad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={() => onChangeGood((good += 1))}>
        Good
      </button>
      <button type="button" onClick={() => onChangeNeutral((neutral += 1))}>
        Neutral
      </button>
      <button type="button" onClick={() => onChangeBad((bad += 1))}>
        Bad
      </button>
      <h2>Statistic</h2>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad} </p>
      <p>Total:{countTotalFeedback()}</p>
      <p>Positive feedback:{countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};
