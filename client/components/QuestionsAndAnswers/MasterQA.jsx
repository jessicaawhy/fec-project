import React, { useState, useEffect } from 'react';
import AddQuestion from './AddQuestion';
import MoreQuestions from './MoreQuestions';
import QuestionList from './QuestionList';
import SearchQuestion from './SearchQuestion';
import Data from './dummyData';
import { MasterContainer, Btn, Scroller } from './styles/MasterQA.style';

const MasterQA = () => {
  const sortedQuestions = Data.questions.results.sort(
    (a, b) => b.question_helpfulness - a.question_helpfulness,
  );

  const [questionsLength, setQuestionsLength] = useState(2);
  const [questions, setQuestions] = useState(sortedQuestions.slice(0, questionsLength));

  const renderMoreQuestions = () => {
    if ((questionsLength + 2) <= sortedQuestions.length) {
      setQuestions(sortedQuestions.slice(0, setQuestionsLength(questionsLength + 2)));
    } else {
      setQuestions(sortedQuestions.slice(0, setQuestionsLength(sortedQuestions.length)));
    }
  };

  const updateHelpfulness = (index) => {
    console.log('testing');
    sortedQuestions[index].question_helpfulness++;
    setQuestions(sortedQuestions.slice(0, questionsLength)); // might introduce a bug here
  };

  const handleSearch = (input) => {
    if (input.length < 3) {
      setQuestions(sortedQuestions.slice(0, questionsLength));
    } else if (input.length >= 3) {
      const matchedQuestions = sortedQuestions.filter((question) => (
        question.question_body.toLowerCase().indexOf(input) !== -1
      ));
      setQuestions(matchedQuestions);
    }
  };
  const handleAddQuestion = (newQuestion) => {
    console.log('from QA', Data.questions.results);
    const temp = [...Data.questions.results, newQuestion];
    const temp1 = temp.sort(
      (a, b) => b.question_helpfulness - a.question_helpfulness,
    );
    setQuestions(temp1.slice(0, 2));
    // temp1 && setQuestions(temp1.slice(0, 2));
  };

  // useEffect(() => {
  //   setQuestions(sortedQuestions.slice(0, sortedQuestions.length));
  // }, [Data.questions.results]);

  return (
    <>
      <MasterContainer data-testid="masterQA">
        <h2>QUESTIONS & ANSWERS</h2>
        <SearchQuestion handleSearch={handleSearch} />
        <Scroller>
          <QuestionList questions={questions} updateHelpfulness={updateHelpfulness} />
        </Scroller>
        <Btn>
          {(questionsLength !== sortedQuestions.length && sortedQuestions.length >= 2)
          && <MoreQuestions renderMoreQuestions={renderMoreQuestions} />}
          <AddQuestion handleAddQuestion={handleAddQuestion} />
        </Btn>
      </MasterContainer>
    </>
  );
};

export default MasterQA;
