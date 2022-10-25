import { useState, useEffect, useContext } from "react";
import ExpensesCard from "../expensesCard";
import YearFilter from "../yearFilter/index";
import { ExpensesFlex, ExpensesGrid, ExpensesTitle } from "./styles";
import { UserContext } from "../../context/expensesContext";

const Expenses = () => {
  const expenses = useContext(UserContext);
  const [year, setYear] = useState("2022");
  const [filteredArray, setFilteredArray] = useState(
    expenses.expenses.filter(
      (element) => element.date.getFullYear().toString() === year
    )
  );

  useEffect(() => {
    setFilteredArray(
      expenses.expenses.filter(
        (element) => element.date.getFullYear().toString() === year
      )
    );
  }, [expenses.expenses, year]);

  return (
    <>
      <ExpensesFlex>
        <ExpensesTitle>Your Expenses</ExpensesTitle>
        <YearFilter expensesArray={expenses.expenses} yearSetter={setYear} />
      </ExpensesFlex>
      <ExpensesGrid>
        {filteredArray.map((element) => (
          <ExpensesCard
            key={element.id}
            title={element.title}
            date={element.date}
            price={element.price}
          />
        ))}
      </ExpensesGrid>
    </>
  );
};

export default Expenses;
