const QuoteInputForm = (props) => {
  return (
    // Quote submission form
    <form>
      <div className="quote-form">
        <div className="quote-form__header">
          <h1>Add One of Your Favorite Quotes!</h1>
        </div>
        <div className="quote-form__controls">
          <div className="quote-form__control">
            <label>Quote: </label>
            <textarea type="input" />
          </div>
          <div className="quote-form__actions">
            <div className="quote-form__action">
              <button type="submit">Submit Quote</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default QuoteInputForm;
