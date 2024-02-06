import "./App.css";
import QuoteInput from "./components/QuoteInput/QuoteInput";
import QuoteList from "./components/QuoteList/QuoteList";
import { useState } from "react";

const DUMMY_QUOTES = [
  {
    id: "q1",
    sentence: "here's a quote",
  },
  {
    id: "q2",
    sentence: "another quote",
  },
];

const App = () => {
  // state handler for quote
  const [quotes, setQuotes] = useState(DUMMY_QUOTES);

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
      <QuoteList items={quotes} onDeleteItem={deleteQuoteHandler}/>
      <QuoteInput
        onAddQuote={addQuoteHandler}
      />
    </div>
  );
};

export default App;
