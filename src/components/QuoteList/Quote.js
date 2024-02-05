const Quote = (props) => {
  return (
    <li>
      <div className="quote-display">
        <h2>{props.sentence}</h2>
      </div>
    </li>
  );
};

export default Quote;
