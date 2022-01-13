import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.title);
  };
  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Card>
        <div className="expense-item__remove" onClick={deleteHandler}>
          Remove
        </div>
      </li>
    </>
  );
};

export default ExpenseItem;
