import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AnswerContainer, AnswerBody, AnswerDetails, UnderLine, Image, ImgContainer,
} from './styles/AnswerItem.style';

const AnswerItem = ({ answer, index, updateAnswerHelpfulness }) => {
  const [isHelpful, setIsHelpful] = useState(false);

  const handleAnswerHelpfulness = () => {
    console.log('clicked -------');
    if (!isHelpful) {
      setIsHelpful(true);
      updateAnswerHelpfulness(index);
    }
  };

  return (
    <AnswerContainer data-testid="answerContainer">
      <AnswerBody>
        A:
      </AnswerBody>
      <AnswerBody>
        {answer.body}
      </AnswerBody>
      <AnswerDetails>
        <span>{answer.answerer_name}</span>
        <span>
          {new Date(answer.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <span>Helpful? </span>
        <UnderLine type="button" onClick={handleAnswerHelpfulness}>Yes</UnderLine>
        <span>{`(${answer.helpfulness})`}</span>
        <UnderLine type="button" onClick={() => console.log('report this answer?')}>Report</UnderLine>
      </AnswerDetails>
      <ImgContainer>
        {answer.photos.length !== 0
        && answer.photos.map((photo, i) => <Image src={`${photo}`} key={i} alt="Answerer's Images" />)}
      </ImgContainer>
    </AnswerContainer>
  );
};

AnswerItem.propTypes = {
  answer: PropTypes.shape({
    body: PropTypes.string,
    answerer_name: PropTypes.string,
    date: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.shape([]),
  }).isRequired,
  index: PropTypes.number.isRequired,
  updateAnswerHelpfulness: PropTypes.func.isRequired,
};

export default AnswerItem;
