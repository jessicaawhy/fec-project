/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import ReviewsListItem from '../components/ReviewsListItem';

describe('should display initial UI for different input types', () => {
  const mockReview = {
    review_id: 1055460,
    rating: 4,
    summary: 'These pants are fine',
    recommend: true,
    response: '',
    body: 'I do like these pants',
    date: '2019-03-21T00:00:00.000Z',
    reviewer_name: 'shopaddict',
    helpfulness: 20,
    photos: [],
  };

  it('renders helpful and report button', () => {
    render(<ReviewsListItem review={mockReview} />);

    const helpfulButton = screen.getByRole('button', { name: /yes/i });
    const reportButton = screen.getByRole('button', { name: /report/i });

    expect(helpfulButton).toBeInTheDocument();
    expect(reportButton).toBeInTheDocument();
  });

  it('does not render the show more button if length of review body is shorter than 250 chars', () => {
    render(<ReviewsListItem review={mockReview} />);

    const showMoreButton = screen.queryByRole('button', { name: /show more/i });
    expect(showMoreButton).toBeNull();
  });

  it('renders the show more button if length of review body is greater than 250 chars', () => {
    mockReview.body = 'a'.repeat(250);

    render(<ReviewsListItem review={mockReview} />);

    const showMoreButton = screen.getByRole('button', { name: /show more/i });
    expect(showMoreButton).toBeInTheDocument();
  });
});
