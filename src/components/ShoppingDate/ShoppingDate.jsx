import React from "react";

import "./ShoppingDate.css";

const ShoppingDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="shopping-date">
      <div className="shopping-date__month">{month}</div>
      <div className="shopping-date__year">{year}</div>
      <div className="shopping-date__day">{day}</div>
    </div>
  );
};

export default ShoppingDate;
