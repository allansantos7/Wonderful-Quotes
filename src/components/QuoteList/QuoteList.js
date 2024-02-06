import Quote from "./Quote";

const QuoteList = (props) => {
  // display if no quotes
  if (props.items.length === 0) {
    return <h2>No quotes</h2>;
  }

  return (
    <div className="quote-list">
      <div className="quote-list__header">
        <h1>Your list of Quotes</h1>
      </div>
      <ul className="quote-list__items">
        {props.items.map((q) => (
          <Quote
            id={q.id}
            sentence={q.sentence}
            onDelete={props.onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
