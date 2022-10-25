import styled from "styled-components";

export const ExpensesTitle = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 41px;
  display: flex;
  align-items: center;
  color: #272639;
  margin: 0px 25px;
`;

export const ExpensesFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 290px) {
    flex-flow: column wrap;
  }
`;

export const ExpensesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
