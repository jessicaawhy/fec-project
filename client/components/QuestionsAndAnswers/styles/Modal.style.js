import styled from 'styled-components';

export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
export const Modal = styled.div`
  max-width: 600px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100%- 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    left: 0px;
    margin: 0px 10px;
    padding: 10px;
  }
`;
export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const LabelArea = styled.label`
  padding: 0 0 5px;
`;
export const InputArea = styled.input`
  width: 500px;
  height: 33px;
`;
export const LargeText = styled.textarea`
  width: 500px;
  height: 99px;
`;
export const Notes = styled.div`
  padding: 3px 0 0;;
`;
export const SubmitInput = styled.input`
  padding: 10px;
`;

export const PopupImg = styled.img`
  width: 500px;
`;
