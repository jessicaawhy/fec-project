import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OverviewContainer from '../OverviewContainer';
// import userEvent from '@testing-library/user-event';

it('should display testid from Overview Container', () => {
  const { getByTestId } = render(<OverviewContainer />);
  expect(getByTestId('container')).toBeInTheDocument();
  // expect(getByText('test')).toBeInTheDocument();
  // ^^ same as --> expect(screen.getByText('test')).toBeInTheDocument();
});

it('should display all subcomponents', () => {
  const { getByTestId } = render(<OverviewContainer />);
  const ids = ['star-rating', 'product-info', 'product-description', 'gallery-container', 'style-selector', 'cart-container'];

  ids.forEach((id) => {
    expect(getByTestId(id)).toBeInTheDocument();
  });
});
