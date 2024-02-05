import Quote from "./Quote";

const QuoteList = (props) => {
  return (
    <div className="quote-list">
      <div classNmae="quote-list__header">
        <h1>Your list of Quotes</h1>
      </div>
      <div className="quote-list__items">
        <Quote sent={props.sentence} />
      </div>
    </div>
  );
};

export default QuoteList;
