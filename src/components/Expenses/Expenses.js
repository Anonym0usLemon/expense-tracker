import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList"; 
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  // will be used to filter ExpenseItems by date
  const [filterDate, setFilterDate] = useState("2020");

  //receives data from ExpenseFilter and stores it in "date" state.
  function dateFilter(data) {
    setFilterDate(data);
  }

  //logic to filter expenses by selected year.
  const filteredArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedDate={filterDate}
          handleDateFilter={dateFilter}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList expenses={filteredArray}/>
      </Card>
    </div>
  );
}

export default Expenses;
