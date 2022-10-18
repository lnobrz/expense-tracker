import { useState, useEffect } from "react";
import ExpensesCard from "../expensesCard";
import YearFilter from "../yearFilter/index";
import { ExpensesFlex, ExpensesGrid, ExpensesTitle } from "./styles";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");
  const [filteredArray, setFilteredArray] = useState(
    props.expensesArray.filter(
      (element) => element.date.getFullYear().toString() === year
    )
  );

  useEffect(() => {
    setFilteredArray(
      props.expensesArray.filter(
        (element) => element.date.getFullYear().toString() === year
      )
    );
  }, [props.expensesArray, year]);

  return (
    <>
      <ExpensesFlex>
        <ExpensesTitle>Your Expenses</ExpensesTitle>
        <YearFilter expensesArray={props.expensesArray} yearSetter={setYear} />
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
