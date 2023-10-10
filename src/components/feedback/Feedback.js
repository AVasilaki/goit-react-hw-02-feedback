export const Feedback = ({ leaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={() => leaveFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => leaveFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => leaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};
