import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
        <h6>
          by
          {answer.answerer_name}
        </h6>
        <h6>
          {new Date(answer.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </h6>
        <h6>Helpful? </h6>
        <UnderLine type="button" onClick={handleAnswerHelpfulness}>Yes</UnderLine>
        <h6>
          (
          {answer.helpfulness}
          )
        </h6>
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

// style
const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerBody = styled.div`
  padding: 3px;
`;
const AnswerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;
const UnderLine = styled.button`
  text-decoration: underline;
  cursor: pointer;
  background-color: inherit;
  border: 0;
`;
const Image = styled.img`
  margin: 0 10px;
  height: 75px;
  flex-direction: row;
`;
const ImgContainer = styled.div`
  display: flex;
  padding: 5px;
`;

export default AnswerItem;
