import { useState, useRef } from "react";
import { FormContainer, FormInput, InputLabel, FormButton } from "./styles";

const ExpensesForm = (props) => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const formValues = {
    title: useRef(undefined),
    titleIsValid: false,
    price: useRef(undefined),
    priceIsValid: false,
    date: useRef(undefined),
  };

  const validateForm = () => {
    if (
      formValues.title.current.value.trim() !== "" &&
      parseFloat(formValues.price.current.value) >= 0
    ) {
      formValues.titleIsValid = true;
      formValues.priceIsValid = true;
    }
  };

  const resetValues = () => {
    formValues.title.current.value = "";
    formValues.titleIsValid = false;
    formValues.price.current.value = "";
    formValues.priceIsValid = false;
    formValues.date.current.value = "";
  };

  const HandlesubmitClick = (event) => {
    event.preventDefault();
    validateForm();
    formValues.titleIsValid &&
      formValues.priceIsValid &&
      formValues.date &&
      props.expensesArraySetter([
        ...props.expensesArray,
        {
          id: Math.floor(Math.random() * (1000 - 5 + 1) + 5),
          title: formValues.title.current.value,
          price: formValues.price.current.value,
          date: new Date(formValues.date.current.value),
        },
      ]);
    resetValues();
    setIsFormOpened(false);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setIsFormOpened(!isFormOpened);
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
              ref={formValues.title}
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
              ref={formValues.price}
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
              ref={formValues.date}
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
