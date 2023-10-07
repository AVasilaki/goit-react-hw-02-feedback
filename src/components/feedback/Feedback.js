export const Feedback = ({ state }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={() => {}}>
        good
      </button>
      <button type="button" onClick={() => {}}>
        Neutral
      </button>
      <button type="button" onClick={() => {}}>
        Bad
      </button>
      <h2>Statistic</h2>
      <p>Good:{state.good}</p>
      <p>Neutral:{state.neutral}</p>
      <p>Bad:{state.bad} </p>
    </div>
  );
};
