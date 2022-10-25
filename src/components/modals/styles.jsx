import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: 50%;
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

export const ContentHeader = styled.div`
  background-color: #272639;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
`;

export const ContentTitle = styled.h1`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: white;
  margin-left: 30px;
`;

export const ContentExplanation = styled.div`
  background: #ffffff;
  height: auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin-top: 60px;
`;

export const ExplanationText = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-size: 16px;
  line-height: 28px;
  color: black;
  margin-left: 30px;
  text-align: center;
  font-weight: 700;
`;

export const ExplanationSubtext = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-size: 16px;
  line-height: 28px;
  color: black;
  margin-left: 30px;
  text-align: center;
`;

export const ModalButton = styled.button`
  background-color: #272639;
  color: white;
  height: 45px;
  width: 20%;
  border-radius: 10px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  margin: 30px auto;
`;
