import ExpensesCard from "../expensesCard";

const Expenses = () => {
  const expensesArray = [
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
  ];

  return (
    <>
      {expensesArray.map((element) => (
        <ExpensesCard
          key={element.id}
          title={element.title}
          date={element.date}
          price={element.price}
        />
      ))}
    </>
  );
};

export default Expenses;
