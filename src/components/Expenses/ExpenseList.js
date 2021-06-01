import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseList.css";
import SubExpenseList from "./SubExpenseList";
import ExpensesChart from "./ExpensesChart";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const changeFilteredYearHandler = (year) => {
    setFilteredYear(year);
    console.log(year);
  };
  const theExpensesFilteredByYear = props.theExpenses.filter(
    (expense) => expense.date.getFullYear() === +filteredYear
  );
  //setExpenseList(props.theExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilteredYearChange={changeFilteredYearHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={theExpensesFilteredByYear} />
      <SubExpenseList items={theExpensesFilteredByYear} />
    </Card>
  );
}

export default ExpenseList;
