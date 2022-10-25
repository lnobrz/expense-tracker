import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
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
    <UserContext.Provider
      value={{ expenses: expensesArray, setter: setExpensesArray }}
    >
      {children}
    </UserContext.Provider>
  );
};
