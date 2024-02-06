import Quote from "./Quote";
import "./QuoteList.css";

const QuoteList = (props) => {
  
  // display if no quotes
  if (props.items.length === 0) {
    return (
      <div className="quote-list__header">
        <h1>No quotes</h1>
      </div>
    );
  }

  return (
    <div className="quote-list">
      <div className="quote-list__header">
        <h1>Quotes</h1>
      </div>
        {props.items.map((q) => (
          <ul className="quote-list__items">
            <Quote
              id={q.id}
              sentence={q.sentence}
              onDelete={props.onDeleteItem}
            />
          </ul>
        ))}
    </div>
  );
};

export default QuoteList;
