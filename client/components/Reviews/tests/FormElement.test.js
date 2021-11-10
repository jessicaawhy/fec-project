/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import FormElement from '../components/FormElement';

describe('should display initial UI for different input types', () => {
  const defaultProps = {
    name: 'cat',
    label: 'bob',
  };

  it('should render an input with role of textbox when passed "text" to the type prop', () => {
    render(<FormElement type="text" {...defaultProps} />);

    const textInput = screen.getByRole('textbox');
    const labelForInput = screen.getByLabelText(/bob/i);

    expect(textInput).toBeInTheDocument();
    expect(labelForInput).toBeInTheDocument();
  });

  it('should render an input with role of radio when passed "radio" to the type prop', () => {
    render(<FormElement type="radio" {...defaultProps} />);

    const radioInput = screen.getByRole('radio');
    const labelForInput = screen.getByLabelText(/bob/i);

    expect(radioInput).toBeInTheDocument();
    expect(labelForInput).toBeInTheDocument();
  });

  it('should render an input with role of textbox when passed "email" to the type prop', () => {
    render(<FormElement type="email" {...defaultProps} />);

    const emailInput = screen.getByRole('textbox');
    const labelForInput = screen.getByLabelText(/bob/i);

    expect(emailInput).toBeInTheDocument();
    expect(labelForInput).toBeInTheDocument();
  });
});
