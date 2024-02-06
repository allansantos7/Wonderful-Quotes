import React from "react";

const Quote = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="quote-display" onClick={deleteHandler}>
      {props.sentence}
    </li>
  );
};

export default Quote;
