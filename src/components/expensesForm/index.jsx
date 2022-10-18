import { useState } from "react";
import { FormContainer, FormInput, InputLabel, FormButton } from "./styles";

const ExpensesForm = (props) => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setIsFormOpened(!isFormOpened);
  };

  const HandlesubmitClick = (event) => {
    event.preventDefault();
    titleValue &&
      priceValue &&
      dateValue &&
      props.expensesArraySetter([
        ...props.expensesArray,
        {
          id: Math.floor(Math.random() * (1000 - 5 + 1) + 5),
          title: titleValue,
          price: priceValue,
          date: new Date(dateValue),
        },
      ]);
    setTitleValue("");
    setPriceValue("");
    setDateValue("");
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
              value={titleValue}
              onChange={(event) => setTitleValue(event.target.value)}
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
              value={priceValue}
              onChange={(event) => setPriceValue(event.target.value)}
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
              value={dateValue}
              onChange={(event) => setDateValue(event.target.value)}
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
