import React from 'react';
import {
  Container1, LabelArea, LargeText, InputArea, Notes, SubmitInput,
} from '../styles/Modal.style';

const QuestionForm = ({
  setOpen,
  newQuestion,
  setNewQuestion,
  handleAddQuestion,
}) => {
  const handleSumbit = (e) => {
    e.preventDefault();
    handleAddQuestion(newQuestion);
    setOpen(false);
  };
  return (
    <form>
      <Container1>
        <LabelArea htmlFor="question">
          Your Question
        </LabelArea>
        <LargeText
          id="question"
          type="text"
          maxlength="1000"
          onChange={(e) => setNewQuestion({ ...newQuestion, question_body: e.target.value })}
        />
      </Container1>
      <Container1>
        <LabelArea htmlFor="nickname">
          Your Nickname
        </LabelArea>
        <InputArea
          id="nickname"
          type="text"
          maxlength="60"
          placeholder="Example: jackson11!"
          onChange={(e) => setNewQuestion({ ...newQuestion, asker_name: e.target.value })}
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
          maxlength="60"
          placeholder="Why did you like the product or not?"
          onChange={(e) => setNewQuestion({ ...newQuestion, email: e.target.value })}
        />
        <Notes>
          For authentication reasons, you will not be emailed
        </Notes>
      </Container1>
      <SubmitInput
        type="submit"
        value="Submit Question"
        onClick={handleSumbit}
      />
    </form>
  );
};
export default QuestionForm;
