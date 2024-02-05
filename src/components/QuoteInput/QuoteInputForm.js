import { useState } from "react";

// Quote input form
const QuoteInputForm = (props) => {
  // state handler for quote
  const [enteredQuote, setEnteredQuote] = useState("");
  const quoteChangeHandler = (event) => {
    setEnteredQuote(event.target.value);
  };

  // handler for when the form is submitted
  const submitHandler = (event) => {
    event.preventDefault(); // prevent page from refreshing when form is submitted

    const quoteData = {
      sentence: enteredQuote,
    };

    props.onSaveQuoteData(quoteData); // Function call in QuoteInput
  };
  return (
    // Quote submission form
    <form onSubmit={submitHandler}>
      <div className="quote-form">
        <div className="quote-form__header">
          <h1>Add One of Your Favorite Quotes!</h1>
        </div>
        <div className="quote-form__controls">
          <div className="quote-form__control">
            <label>Quote: </label>
            <textarea
              type="input"
              value={enteredQuote}
              onChange={quoteChangeHandler}
            />
          </div>
          <div className="quote-form__actions">
            <div className="quote-form__submitaction">
              <button type="submit">Submit Quote</button>
            </div>
            <div className="quote-form__cancelaction">
              <button type="button" onClick={props.onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default QuoteInputForm;
