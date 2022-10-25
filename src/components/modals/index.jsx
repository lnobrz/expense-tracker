import { createPortal } from "react-dom";
import {
  ContentHeader,
  ContentTitle,
  Modal,
  ModalContent,
  ContentExplanation,
  ExplanationText,
  ExplanationSubtext,
  ModalButton,
} from "./styles";

export const InvalidModal = (props) => {
  return (
    <Modal>
      <ModalContent>
        <ContentHeader>
          <ContentTitle>Invalid Input</ContentTitle>
        </ContentHeader>
        <ContentExplanation>
          <ExplanationText>{props.message1}</ExplanationText>
          <ExplanationSubtext>{props.message2}</ExplanationSubtext>
        </ContentExplanation>
        <ModalButton onClick={props.handler}>Close</ModalButton>
      </ModalContent>
    </Modal>
  );
};

export const InvalidInputModal = (props) => {
  return (
    <>
      {createPortal(
        <InvalidModal
          handler={props.handler}
          message1={props.message1}
          message2={props.message2}
        />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default InvalidInputModal;
