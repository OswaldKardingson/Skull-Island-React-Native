// __tests__/components/Form.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Form from '../../src/components/Form';

describe('Form Component', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<Form />);
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('submits the form with valid data', () => {
    const onSubmitMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Form onSubmit={onSubmitMock} />);
    const input = getByPlaceholderText('Enter text');
    const button = getByText('Submit');

    fireEvent.changeText(input, 'Valid Input');
    fireEvent.press(button);

    expect(onSubmitMock).toHaveBeenCalledWith('Valid Input');
  });

  it('validates input fields', () => {
    const { getByText } = render(<Form />);
    const button = getByText('Submit');

    fireEvent.press(button);

    expect(getByText('Input cannot be empty')).toBeTruthy();
  });
});
