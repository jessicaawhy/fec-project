import React from 'react';
import styled from 'styled-components';

// for add question
export const QuestionModal = () => (
  <form>
    <Container1>
      <LabelArea htmlFor="question">
        Your Question
      </LabelArea>
      <LargeText
        id="question"
        type="text"
        maxlength="1000"
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
      />
      <Notes>
        For authentication reasons, you will not be emailed
      </Notes>
    </Container1>
    <SubmitInput type="submit" value="Submit Question" />
  </form>
);
export const AnswerModal = () => (
  <form>
    <Container1>
      <LabelArea htmlFor="yourAnswer">
        Your Answer
      </LabelArea>
      <LargeText
        id="yourAnswer"
        type="text"
        maxlength="1000"
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
        placeholder="Example: jack543!"
      />
      <Notes>
        For privacy reasons, do not use your full name or email address
      </Notes>
    </Container1>
  </form>
);

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const LabelArea = styled.label`
  padding: 0 0 5px;
`;
const InputArea = styled.input`
  width: 500px;
  height: 33px;
`;
const LargeText = styled.textarea`
  width: 500px;
  height: 99px;
`;
const Notes = styled.div`
  padding: 3px 0 0;;
`;
const SubmitInput = styled.input`
  padding: 10px;
`;

// 1.3.5.4.     Submit question (button)
// A button by which the question can be submitted.

// Upon selecting this button the form’s inputs should be validated.
//  If there are any invalid entries, the submission should be prevented,
//  and a warning message will appear.
// This message should be titled “You must enter the following:

// This error will occur if :
// Any mandatory fields are blank
// The email address provided is not in correct email format
