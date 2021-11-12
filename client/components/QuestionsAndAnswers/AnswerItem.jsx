import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AnswerContainer, AnswerBody, AnswerDetails, UnderLine,
  Image, ImgContainer, ImgDialog, PopupImg, FlexSpan,
} from './styles/AnswerItem.style';
import PhotoModal from './modal/PhotoModal';
import { reportQuestion, updAnswerHelpfulness, formatDate } from './helpers/helpers';

const AnswerItem = ({
  questionID, answer, index, updateAnswerHelpfulness,
}) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [showPhotoModal, setShowPhtoModal] = useState(false);
  const [currPhoto, setCurrPhoto] = useState('');

  const handleImgModal = (photo) => {
    setShowPhtoModal(true);
    setCurrPhoto(photo);
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
        {`A: ${answer.body}`}
      </AnswerBody>
      <AnswerDetails>
        <FlexSpan>
          {`By: ${answer.answerer_name}`}
        </FlexSpan>
        <FlexSpan>
          {formatDate(answer.date)}
        </FlexSpan>
        <FlexSpan>Helpful? </FlexSpan>
        <UnderLine type="button" onClick={(e) => handleAnswerHelpfulness(e, answer.id)}>Yes</UnderLine>
        <FlexSpan>{` (${answer.helpfulness})`}</FlexSpan>
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
              onClick={() => handleImgModal(photo)}
            />
          </div>
        ))}
      </ImgContainer>
      {showPhotoModal
          && (
          <PhotoModal
            currPhoto={currPhoto}
            setShowPhtoModal={setShowPhtoModal}
          />
          )}
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
