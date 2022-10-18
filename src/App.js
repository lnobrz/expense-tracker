import { useState } from "react";
import "./App.css";
import GlobalStyle from "./global/globalStyles";
import AppHeader from "./components/header";
import Expenses from "./components/expenses/index";
import ExpensesForm from "./components/expensesForm";

function App() {
  const [expensesArray, setExpensesArray] = useState([
    {
      id: 1,
      title: "Macbook Air M1",
      price: 1535.49,
      date: new Date(2022, 1, 15),
    },
    {
      id: 2,
      title: "Galaxy S22 Ultra",
      price: 1537.98,
      date: new Date(2021, 11, 15),
    },
    {
      id: 3,
      title: "Smart TV",
      price: 3589.73,
      date: new Date(2020, 7, 22),
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <ExpensesForm
        expensesArray={expensesArray}
        expensesArraySetter={setExpensesArray}
      />
      <Expenses expensesArray={expensesArray} />
    </>
  );
}

export default App;
