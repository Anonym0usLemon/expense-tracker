import { useState, useRef } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const title = useRef(); 
  const amount = useRef(); 
  const date = useRef(); 

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = title.current.value;
    const enteredAmount = amount.current.value;
    const enteredDate = date.current.value

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); 
    props.hideFormHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            ref={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            ref={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            ref={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.hideFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
