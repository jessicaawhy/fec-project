/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should render an input with role of textbox when passed "email" to the type prop', () => {
    render(<FormElement type="email" {...defaultProps} />);

    const emailInput = screen.getByRole('textbox');
    const labelForInput = screen.getByLabelText(/bob/i);

    expect(emailInput).toBeInTheDocument();
    expect(labelForInput).toBeInTheDocument();
  });

  it('should render an input with role of radio when passed "radio" to the type prop', () => {
    render(<FormElement type="radio" {...defaultProps} />);

    const radioInput = screen.getByRole('radio');
    const labelForInput = screen.getByLabelText(/bob/i);

    expect(radioInput).toBeInTheDocument();
    expect(labelForInput).toBeInTheDocument();
  });
});

describe('should handle user events properly', () => {
  const defaultProps = {
    name: 'cat',
    label: 'bob',
  };

  it('should display text inputs that a user types into a text type input', () => {
    render(<FormElement type="text" {...defaultProps} />);

    userEvent.type(screen.getByRole('textbox'), 'Hello, World!');
    expect(screen.getByRole('textbox')).toHaveValue('Hello, World!');
  });

  it('should display text inputs that a user types into an email type input', () => {
    render(<FormElement type="email" {...defaultProps} />);

    userEvent.type(screen.getByRole('textbox'), 'bob@123.com');
    expect(screen.getByRole('textbox')).toHaveValue('bob@123.com');
  });

  it('should select a radio input after clicking on it', () => {
    render(<FormElement type="radio" {...defaultProps} />);

    userEvent.click(screen.getByText(/bob/i));
    expect(screen.getByLabelText(/bob/i)).toBeChecked();
  });
});
