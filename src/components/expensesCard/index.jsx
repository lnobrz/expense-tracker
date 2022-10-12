import {
  CardContainer,
  CardTitle,
  CardDate,
  CardExpense,
  CardFlexContainer,
} from "./styles";

export const ExpensesCard = (props) => {
  const dates = {
    year: props.date.getFullYear(),
    month: props.date.getMonth(),
    day: props.date.getDate(),
    formatedMonth: function () {
      return this.month <= 9
        ? "0" + (props.date.getMonth() + 1)
        : props.date.getMonth() + 1;
    },
    fullDate: function () {
      return this.year + "/" + this.formatedMonth() + "/" + this.day;
    },
  };

  return (
    <CardContainer>
      <CardFlexContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardExpense>R${props.price}</CardExpense>
      </CardFlexContainer>
      <CardDate>{dates.fullDate()}</CardDate>
    </CardContainer>
  );
};

export default ExpensesCard;
