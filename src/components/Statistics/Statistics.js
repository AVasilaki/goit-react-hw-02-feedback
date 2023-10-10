export const Statistic = ({
  state: { good, neutral, bad },
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <h2>Statistic</h2>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad} </p>
      <p>Total:{countTotalFeedback()}</p>
      <p>Positive feedback:{countPositiveFeedbackPercentage()}%</p>
    </>
  );
};
