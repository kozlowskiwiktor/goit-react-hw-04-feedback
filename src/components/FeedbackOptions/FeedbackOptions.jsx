function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className=""
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default FeedbackOptions;
