import { YearSelector } from "./styles";

const YearFilter = (props) => {
  const yearsArray = [
    ...new Set(
      props.expensesArray.map((element) => element.date.getFullYear())
    ),
  ];

  const handleFilterChange = (event) => {
    props.yearSetter(event.target.value);
  };

  return (
    <YearSelector onChange={handleFilterChange}>
      {yearsArray.map((element) => (
        <option value={element}>{element}</option>
      ))}
    </YearSelector>
  );
};

export default YearFilter;
