import "./App.css";
import QuoteInput from "./components/QuoteInput/QuoteInput";
import QuoteList from "./components/QuoteList/QuoteList";
import { useState } from "react";

const App = () => {
  // state handler for quote
  const [quotes, setQuotes] = useState("");

  // handler for when a quote is added to existing list
  const addQuoteHandler = (quote) => {
    setQuotes((prevQuotes) => {
      return [quote, ...prevQuotes];
    });
  };

  // handler for when a quote is deleted on existing list
  const deleteQuoteHandler = (quoteID) => {
    setQuotes((prevQuotes) => {
      const updatedQuotes = prevQuotes.filter((q) => q.id !== quoteID);
      return updatedQuotes;
    });
  };

  return (
    <div className="App">
      <div>
      <QuoteList items={quotes} onDeleteItem={deleteQuoteHandler}/>
      </div>
      <div className="quote-form">
      <QuoteInput
        onAddQuote={addQuoteHandler}
      />
      </div>
    </div>
  );
};

export default App;
