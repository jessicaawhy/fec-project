import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsListItem from './ReviewsListItem';

const sampleReview = {
  review_id: 1055457,
  rating: 3,
  summary: "I'm enjoying wearing these shades",
  recommend: true,
  response: '',
  body: 'Comfortable and practical.',
  date: '2019-04-14T00:00:00.000Z',
  reviewer_name: 'shortandsweeet',
  helpfulness: 5,
  photos: [],
};

it('should display initial UI', () => {
  render(<ReviewsListItem review={sampleReview} />);

  expect(screen.getByText(sampleReview.rating)).toBeInTheDocument();
  expect(screen.getByText(`${sampleReview.recommend ? 'Verified ' : ''}${sampleReview.reviewer_name}`)).toBeInTheDocument();
  expect(screen.getByText(sampleReview.date)).toBeInTheDocument();
  expect(screen.getByText(sampleReview.summary)).toBeInTheDocument();
  expect(screen.getByText(sampleReview.body)).toBeInTheDocument();

  expect(screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Report' })).toBeInTheDocument();
});
