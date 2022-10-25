import { useState, useRef, useContext } from "react";
import {
  FormContainer,
  FormInput,
  InputLabel,
  FormButton,
  ButtonContainer,
} from "./styles";
import { UserContext } from "../../context/expensesContext";
import { InvalidInputModal } from "../modals";

const ExpensesForm = () => {
  const expenses = useContext(UserContext);
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const formValues = {
    title: useRef(undefined),
    titleIsValid: false,
    price: useRef(undefined),
    priceIsValid: false,
    date: useRef(undefined),
    dateIsValid: false,
  };

  const validateForm = () => {
    if (
      formValues.title.current.value.trim() !== "" &&
      parseFloat(formValues.price.current.value) >= 0 &&
      formValues.date.current.value !== ""
    ) {
      formValues.titleIsValid = true;
      formValues.priceIsValid = true;
      formValues.dateIsValid = true;
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
    if (
      formValues.titleIsValid &&
      formValues.priceIsValid &&
      formValues.dateIsValid
    ) {
      expenses.setter([
        ...expenses.expenses,
        {
          id: Math.floor(Math.random() * (1000 - 5 + 1) + 5),
          title: formValues.title.current.value,
          price: formValues.price.current.value,
          date: new Date(formValues.date.current.value),
        },
      ]);
      resetValues();
      setIsFormOpened(false);
    } else {
      setOpenModal(true);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setIsFormOpened(!isFormOpened);
  };

  const handleModalClick = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <InvalidInputModal
          handler={handleModalClick}
          message1={
            "Ooops... you've filled on or more of the input fields with invalid values."
          }
          message2={
            "Check if you've filled all of the inputs fields and if the price field contains a number greater than 0."
          }
        />
      )}
      <FormContainer>
        {isFormOpened ? (
          <>
            <InputLabel htmlFor="title" className="titleInputLabel" required>
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
            <InputLabel htmlFor="price" className="priceInputLabel" required>
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
            <InputLabel htmlFor="date" className="dateInputLabel" required>
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
