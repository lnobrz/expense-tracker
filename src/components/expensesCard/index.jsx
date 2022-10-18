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
    formatedDay: function () {
      return this.day > 8
        ? props.date.getDate() + 1
        : "0" + (props.date.getDate() + 1);
    },
    formatedMonth: function () {
      return this.month > 8
        ? props.date.getMonth() + 1
        : "0" + (props.date.getMonth() + 1);
    },
    fullDate: function () {
      return this.year + "/" + this.formatedMonth() + "/" + this.formatedDay();
    },
  };

  return (
    <CardContainer>
      <CardFlexContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardExpense>U${props.price}</CardExpense>
      </CardFlexContainer>
      <CardDate>{dates.fullDate()}</CardDate>
    </CardContainer>
  );
};

export default ExpensesCard;
