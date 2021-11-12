import React from 'react';
import PropTypes from 'prop-types';
import { useProduct } from '../../../ProductContext';
import {
  Container1, LabelArea, LargeText, InputArea, Notes,
  SubmitInput, SubmitContainer, Title, SubTitle, TitleContainer, Exit,
} from '../styles/Modal.style';

const AnswerForm = ({
  question,
  newAnswer,
  setNewAnswer,
  setIsAdd,
  handleAddAnswer,
}) => {
  const currProduct = useProduct();
  const handleAnswerSumbit = (e) => {
    e.preventDefault();
    handleAddAnswer(newAnswer);
    setIsAdd(false);
  };

  return (
    <form onSubmit={handleAnswerSumbit}>
      <TitleContainer>
        <Title>
          Submit Your Answer
        </Title>
        <Exit onClick={() => setIsAdd(false)}>
          X
        </Exit>
        <SubTitle>
          {`${currProduct.name}: ${question.question_body}`}
        </SubTitle>
      </TitleContainer>
      <Container1>
        <LabelArea htmlFor="yourAnswer">
          Your Answer
        </LabelArea>
        <LargeText
          id="yourAnswer"
          type="text"
          maxlength="1000"
          required
          onChange={(e) => setNewAnswer({ ...newAnswer, body: e.target.value })}
        />
      </Container1>
      <Container1>
        <LabelArea htmlFor="yourNickname">
          What is your nickname
        </LabelArea>
        <InputArea
          id="yourNickname"
          type="text"
          maxlength="60"
          required
          placeholder="Example: jack543!"
          onChange={(e) => setNewAnswer({ ...newAnswer, name: e.target.value })}
        />
        <Notes>
          For privacy reasons, do not use your full name or email address
        </Notes>
      </Container1>
      <Container1>
        <LabelArea htmlFor="yourEmail">
          Email
        </LabelArea>
        <InputArea
          required
          id="yourEmail"
          type="email"
          maxlength="60"
          placeholder="Example: jack@email.com"
          onChange={(e) => setNewAnswer({ ...newAnswer, email: e.target.value })}
        />
        <Notes>
          For authentication reasons, you will not be emailed
        </Notes>
      </Container1>
      <Container1>
        <LabelArea htmlFor="photos">
          Upload your photos
        </LabelArea>
        <InputArea
          id="photos"
          type="file"
          accept="image/*"
          multiple
        />
      </Container1>
      <SubmitContainer>
        <SubmitInput
          type="submit"
          value="Submit Answer"
        />
      </SubmitContainer>
    </form>
  );
};

AnswerForm.propTypes = {
  question: PropTypes.shape({
    question_body: PropTypes.string,
  }).isRequired,
  newAnswer: PropTypes.shape({}).isRequired,
  setNewAnswer: PropTypes.func.isRequired,
  setIsAdd: PropTypes.func.isRequired,
  handleAddAnswer: PropTypes.func.isRequired,
};

export default AnswerForm;
