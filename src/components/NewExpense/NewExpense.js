import { useState } from "react"; 
import "./NewExpense.css"; 
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    //function to store form data and lift it up to App.js 
    function onSaveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };

        props.onAddExpense(expenseData); 
    }

    //show and hide the form when 'cancel' or 'add new expense' is clicked
    const [clicked, setClicked] = useState(false); 
    let content = ""; 

    function showForm() {
        if (!clicked) {
            setClicked(true); 
        } else {
            setClicked(false); 
        }
    }

    if (clicked) {
        content = <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} hideFormHandler={showForm}/>
    } else {
        content = <button onClick={showForm}>Add New Expense</button>
    }


    return (
        <div className="new-expense">
            {content}
        </div>
    );
}

export default NewExpense; 