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
  max-width: 399px;
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

export const PicModal = styled.div`
  max-width: 399px;
  background-color: white;
  position: fixed;
  top: 75px;
  bottom: 100px;
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
  padding: 15px 15px 0 15px;
`;
export const SubmitContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
`;

export const LabelArea = styled.label`
  padding: 0 0 5px;
`;
export const InputArea = styled.input`
  width: 333px;
  height: 33px;
`;
export const LargeText = styled.textarea`
  width: 333px;
  height: 99px;
`;

export const Notes = styled.div`
  padding: 3px 0 0;;
  font-size: 10px;
`;
export const SubmitInput = styled.input`
  padding: 10px;
  width: 90%;
  border-radius: 20px;
  &:hover {
    background:#016ABC;
     color: #fff;
     border:1px solid #eee;
     border-radius:20px;
     box-shadow:5px 5px 5px #eee;
     text-shadow: none;
  }
`;

export const PopupImg = styled.img`
  width: 100%;
  height: 100%
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  background-color: #016ABC;
  color: #fff;
`;

export const Title = styled.h3`
  grid-column: span 7;
  padding: 10px;
`;
/* top | right | bottom | left */
export const SubTitle = styled.h5`
  grid-column: span 7;
  padding: 0 10px 10px 10px;
`;

export const Exit = styled.button`
  grid-column: span 1;
  border: none;
  border-radius: 40%;
  padding: 11px 0;
  align-self: center;
  background-color: white;
  color: red;
  font-weigth: bold;
`;
