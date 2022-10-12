import styled from "styled-components";

export const CardContainer = styled.div`
  height: auto;
  width: 600px;
  background: white;
  border: 1px solid #bbbbbb;
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const CardFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;
export const CardTitle = styled.h2`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  margin-top: 20px;
  margin-left: 30px;
`;

export const CardExpense = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #000000;
  margin-top: 20px;
  margin-right: 30px;
`;

export const CardDate = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #656565;
  margin-left: 30px;
  margin-bottom: 30px;
`;
