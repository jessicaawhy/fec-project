import React, { useState, useEffect } from 'react';
import AddQuestion from './AddQuestion';
import MoreQuestions from './MoreQuestions';
import QuestionList from './QuestionList';
import SearchQuestion from './SearchQuestion';
import Data from './dummyData';
import { getQuestions, getAnswers } from './helpers/helpers';
import { MasterContainer, Btn, Scroller } from './styles/MasterQA.style';

// const axios = require('axios');

const MasterQA = () => {
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);
  const [questionsLength, setQuestionsLength] = useState(2);
  const sortedQuestions = questionsFromAPI.slice().sort(
    (a, b) => b.question_helpfulness - a.question_helpfulness,
  );
  const [questions, setQuestions] = useState(sortedQuestions.slice(0, questionsLength));

  useEffect(async () => {
    const questionsFetched = await getQuestions(61579, 1, 5);
    // understand useContext more and replace this hardcoded productID
    console.log('----- results', questionsFetched.results);
    setQuestionsFromAPI(questionsFetched.results);
    // revisit to figure out why promisfy is not working and why need to useEffect
  }, []);

  useEffect(() => {
    console.log('what is quesitons from API-------', questionsFromAPI);
    console.log('what is sorted-------', sortedQuestions);
    setQuestions(questionsFromAPI.slice(0, questionsLength));
  }, [questionsFromAPI]);

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
  };

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

// const promise = new Promise((resolve, reject) => resolve(setQuestionsFromAPI(questionsFetched.results)));
// promise.then(() => setQuestions(questionsFromAPI.slice(0, questionsLength))).catch((err) => console.log('err///', err));
// setQuestions(questionsFromAPI.slice(0, questionsLength));
