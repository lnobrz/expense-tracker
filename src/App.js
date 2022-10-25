import "./App.css";
import GlobalStyle from "./global/globalStyles";
import AppHeader from "./components/header";
import Expenses from "./components/expenses/index";
import ExpensesForm from "./components/expensesForm";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <ExpensesForm />
      <Expenses />
    </>
  );
}

export default App;
