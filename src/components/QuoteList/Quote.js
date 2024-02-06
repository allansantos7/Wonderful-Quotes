import React from "react";
import "./Quote.css";

const Quote = (props) => {
  // calls onDelete from QuoteList
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li class="bubble" className="quote-display" onClick={deleteHandler}>
      {props.sentence}
    </li>
  );
};

export default Quote;
