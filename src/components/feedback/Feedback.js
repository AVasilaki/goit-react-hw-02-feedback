export const Feedback = ({ leaveFeedback }) => {
  return (
    <div>
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
