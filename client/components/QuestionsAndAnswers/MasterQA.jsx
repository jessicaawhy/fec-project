import React, { useState, useEffect } from 'react';
import { useProduct } from '../../ProductContext';
import AddQuestion from './AddQuestion';
import MoreQuestions from './MoreQuestions';
import QuestionList from './QuestionList';
import SearchQuestion from './SearchQuestion';
import { getQuestions, getAnswers, postQuestion } from './helpers/helpers';
import { MasterContainer, Btn, Header } from './styles/MasterQA.style';

const MasterQA = () => {
  const currProduct = useProduct(); // const useProduct = () => useContext(ProductContext)
  const [product, setProduct] = useState(currProduct);
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);
  const [questionsLength, setQuestionsLength] = useState(2);
  const sortedQuestions = questionsFromAPI.slice().sort(
    (a, b) => b.question_helpfulness - a.question_helpfulness,
  );
  const [questions, setQuestions] = useState(sortedQuestions.slice(0, questionsLength));

  useEffect(() => {
    setProduct(currProduct);
  }, [currProduct]);

  useEffect(async () => {
    // const questionsFetched = await getQuestions(61579, 1, 11);
    const questionsFetched = await getQuestions(product.id, 1, 11);
    setQuestionsFromAPI(questionsFetched.results);
  }, []);

  useEffect(() => {
    setQuestions(questionsFromAPI.slice(0, questionsLength));
  }, [questionsFromAPI, currProduct]);

  const handleAddQuestion = (newQuestion) => {
    const data = {
      product_id: product.id,
      body: newQuestion.body,
      name: newQuestion.name,
      email: newQuestion.email,
    };
    postQuestion(data); // if time allowed, consider fixing it
    getQuestions(product.id, 1, 10);
  };

  const renderMoreQuestions = () => {
    if ((questionsLength + 2) <= sortedQuestions.length) {
      setQuestions(sortedQuestions.slice(0, setQuestionsLength(questionsLength + 2)));
    } else {
      setQuestions(sortedQuestions.slice(0, setQuestionsLength(sortedQuestions.length)));
    }
  };

  const updateHelpfulness = (index) => {
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

  return (
    <>
      <MasterContainer data-testid="masterQA">
        <Header>QUESTIONS & ANSWERS</Header>
        <SearchQuestion handleSearch={handleSearch} />
        <QuestionList questions={questions} updateHelpfulness={updateHelpfulness} />
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
