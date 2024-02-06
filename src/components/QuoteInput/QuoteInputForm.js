import { useState } from "react";
import "./QuoteInputForm.css";

// Quote input form
const QuoteInputForm = (props) => {

  // state handler for user validation
  const [isValid, setIsValid] = useState(true);

  // state handler for quote
  const [enteredQuote, setEnteredQuote] = useState("");

  const quoteChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredQuote(event.target.value);
  };

  // handler for when the form is submitted
  const submitHandler = (event) => {
    event.preventDefault(); // prevent page from refreshing when form is submitted
    // if text entry field is empty, set valid as false
    if (enteredQuote.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const quoteData = {
      sentence: enteredQuote,
    };

    props.onSaveQuoteData(quoteData); // Function call in QuoteInput

    setEnteredQuote("");
  };
  return (
    // Quote submission form
    <form onSubmit={submitHandler}>
      <div className="quote-form">
        <div className="quote-form__controls">
          <div className={`quote-form__control ${!isValid ? 'invalid' : ""}`}>
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
