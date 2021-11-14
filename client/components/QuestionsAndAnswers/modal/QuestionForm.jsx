import React from 'react';
import PropTypes from 'prop-types';
import { useProduct } from '../../../ProductContext';
import {
  Container1, LabelArea, LargeText, InputArea, Notes,
  SubmitInput, SubmitContainer, Title, SubTitle, TitleContainer, Exit,
} from '../styles/Modal.style';

const QuestionForm = ({
  setOpen,
  newQuestion,
  setNewQuestion,
  handleAddQuestion,
}) => {
  const currProduct = useProduct();
  const handleSumbit = (e) => {
    e.preventDefault();
    handleAddQuestion(newQuestion);
    setOpen(false);
  };
  return (
    <form onSubmit={handleSumbit}>
      <TitleContainer>
        <Title>
          Ask Your Question
        </Title>
        <Exit onClick={() => setOpen(false)}>
          X
        </Exit>
        <SubTitle>
          {`About the ${currProduct.name}`}
        </SubTitle>
      </TitleContainer>
      <Container1>
        <LabelArea htmlFor="question">
          Your Question
        </LabelArea>
        <LargeText
          id="question"
          type="text"
          maxlength="1000"
          required
          onChange={(e) => setNewQuestion({ ...newQuestion, body: e.target.value })}
        />
      </Container1>
      <Container1>
        <LabelArea htmlFor="nickname">
          Your Nickname
        </LabelArea>
        <InputArea
          id="nickname"
          type="text"
          required
          maxlength="60"
          placeholder="Example: jackson11!"
          onChange={(e) => setNewQuestion({ ...newQuestion, name: e.target.value })}
        />
        <Notes>
          For privacy reasons, do not use your full name or email address
        </Notes>
      </Container1>
      <Container1>
        <LabelArea htmlFor="email">
          Your Email
        </LabelArea>
        <InputArea
          id="email"
          type="email"
          required
          maxlength="60"
          placeholder="Why did you like the product or not?"
          onChange={(e) => setNewQuestion({ ...newQuestion, email: e.target.value })}
        />
        <Notes>
          For authentication reasons, you will not be emailed
        </Notes>
      </Container1>
      <SubmitContainer>
        <SubmitInput
          type="submit"
          value="Submit Question"
        />
      </SubmitContainer>
    </form>
  );
};

QuestionForm.propTypes = {
  newQuestion: PropTypes.shape({}).isRequired,
  setNewQuestion: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
  handleAddQuestion: PropTypes.func.isRequired,
};

export default QuestionForm;
