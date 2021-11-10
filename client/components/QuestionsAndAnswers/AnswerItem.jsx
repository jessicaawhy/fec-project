import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AnswerContainer, AnswerBody, AnswerDetails, UnderLine, Image, ImgContainer, ImgDialog, PopupImg,
} from './styles/AnswerItem.style';
import { ModalShadow, Modal } from './styles/Modal.style';
import PhotoModal from './modal/PhotoModal';
import { reportQuestion, updAnswerHelpfulness } from './helpers/helpers';

const AnswerItem = ({
  questionID, answer, index, updateAnswerHelpfulness,
}) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImgModal = () => {
    setIsEnlarged((prevState) => !prevState);
    console.log('image is clicked---------');
  };

  const handleAnswerHelpfulness = (e, answerID) => {
    if (!isHelpful) {
      updAnswerHelpfulness(answerID);
      setIsHelpful(true);
      e.target.classList.add('marked');
      updateAnswerHelpfulness(index);
    }
  };
  const handleReportedAnswer = (e, currQuestionID) => {
    if (!isReported) {
      setIsReported(true);
      reportQuestion(currQuestionID);
      e.target.classList.add('marked');
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
        <UnderLine type="button" onClick={(e) => handleAnswerHelpfulness(e, answer.id)}>Yes</UnderLine>
        <span>{`(${answer.helpfulness})`}</span>
        <UnderLine type="button" onClick={(e) => handleReportedAnswer(e, questionID)}>
          {isReported ? 'Reported' : 'Report'}
        </UnderLine>
      </AnswerDetails>
      <ImgContainer>
        {answer.photos.length !== 0
        && answer.photos.map((photo, i) => (
          <div>
            <Image
              src={`${photo}`}
              key={i}
              alt="Answerer's Images"
              onClick={handleImgModal}
            />
            {isEnlarged
            && (
            <PhotoModal
              handleImgModal={handleImgModal}
              currPhoto={photo}
            />
            )}
          </div>
        ))}
      </ImgContainer>
    </AnswerContainer>
  );
};

AnswerItem.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number,
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
