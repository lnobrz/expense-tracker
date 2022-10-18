import styled from "styled-components";

export const FormContainer = styled.form`
  background: #ffffff;
  border-radius: 10px;
  display: grid;
  align-items: end;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  padding: 30px 15px 30px 15px;
  margin: 25px 25px 30px 25px;
`;

export const InputLabel = styled.label`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const FormInput = styled.input`
  background: #eff0f4;
  height: 35px;
  border-radius: 10px;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
`;

export const FormButton = styled.button`
  background-color: #272639;
  color: white;
  height: 45px;
  border-radius: 10px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
`;
