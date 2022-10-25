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

  @media (max-width: 600px) {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    gap: 0px;
  }
`;

export const InputLabel = styled.label`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const FormInput = styled.input`
  background: #eff0f4;
  height: 35px;
  border-radius: 10px;
  border: none;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 600px) {
    width: 80%;
  }
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

  @media (max-width: 600px) {
    width: 50%;
    height: 60px;
  }
`;
