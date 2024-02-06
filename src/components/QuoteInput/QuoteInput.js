import QuoteInputForm from "./QuoteInputForm";
import { useState } from "react";

const QuoteInput = (props) => {
  // state handler to display form or button
  const [isAdding, setIsAdding] = useState(false);

  // handler sets adding to true
  const startAddingHandler = () => {
    setIsAdding(true);
  };
  // handlers sets adding to false
  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  // handler for when new quotes are submitted in QuoteInputForm
  const saveQuoteDataHandler = (enteredQuote) => {
    const quoteData = {
      ...enteredQuote,
      id: Math.random().toString(),
    };
    props.onAddQuote(quoteData); // call function in App
  };
  
  return (
    <div>
      <div className="quote-display">
        {!isAdding && <button onClick={startAddingHandler}>Add a Quote</button>}
        {isAdding && (
          <QuoteInputForm
            onSaveQuoteData={saveQuoteDataHandler}
            onCancel={stopAddingHandler}
          />
        )}
      </div>
    </div>
  );
};

export default QuoteInput;
