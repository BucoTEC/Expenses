import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  const removeHandler = (title) => {
    props.onRemove(title);
  };
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          onDelete={removeHandler}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
