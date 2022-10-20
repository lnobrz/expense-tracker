import { useState, useRef } from "react";
import { FormContainer, FormInput, InputLabel, FormButton } from "./styles";

const ExpensesForm = (props) => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const title = useRef(undefined);
  const price = useRef(undefined);
  const date = useRef(undefined);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFormOpened(!isFormOpened);
  };

  const HandlesubmitClick = (event) => {
    event.preventDefault();
    title &&
      price &&
      date &&
      props.expensesArraySetter([
        ...props.expensesArray,
        {
          id: Math.floor(Math.random() * (1000 - 5 + 1) + 5),
          title: title.current.value,
          price: price.current.value,
          date: new Date(date.current.value),
        },
      ]);
    title.current.value = "";
    price.current.value = "";
    date.current.value = "";
    setIsFormOpened(false);
  };

  return (
    <>
      <FormContainer>
        {isFormOpened ? (
          <>
            <InputLabel for="title" className="titleInputLabel" required>
              Title
            </InputLabel>
            <br />
            <FormInput
              type="text"
              id="title"
              name="title"
              className="titleInput"
              ref={title}
            />
            <br />
            <InputLabel for="price" className="priceInputLabel" required>
              Price
            </InputLabel>
            <br />
            <FormInput
              type="number"
              id="price"
              name="price"
              className="priceInput"
              ref={price}
            />
            <br />
            <InputLabel for="date" className="dateInputLabel" required>
              Date
            </InputLabel>
            <br />
            <FormInput
              type="date"
              id="date"
              name="date"
              className="dateInput"
              ref={date}
            />
            <FormButton className="cancelButton" onClick={handleClick}>
              Cancel
            </FormButton>
            <FormButton
              className="addButton"
              type="submit"
              onClick={HandlesubmitClick}
            >
              Add Expense
            </FormButton>
          </>
        ) : (
          <>
            <FormButton className="newExpenseButton" onClick={handleClick}>
              Add New Expense
            </FormButton>
          </>
        )}
      </FormContainer>
    </>
  );
};

export default ExpensesForm;
