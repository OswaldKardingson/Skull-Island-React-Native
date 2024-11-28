import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '@components/Button'; 

describe('Button Component', () => {
  it('renders correctly with default styles', () => {
    const { getByTestId } = render(
      <Button onPress={() => {}} title="Test Button" />
    );

    const button = getByTestId('button');
    const buttonText = getByTestId('button-text');

    expect(button).toBeTruthy();
    expect(buttonText).toBeTruthy();
    expect(buttonText.props.children).toBe('Test Button');
  });

  it('applies custom styles', () => {
    const customButtonStyle = { backgroundColor: 'green' };
    const customTextStyle = { color: 'yellow' };

    const { getByTestId } = render(
      <Button
        onPress={() => {}}
        title="Styled Button"
        style={customButtonStyle}
        textStyle={customTextStyle}
      />
    );

    const button = getByTestId('button');
    const buttonText = getByTestId('button-text');

    expect(button.props.style).toContainEqual(customButtonStyle);
    expect(buttonText.props.style).toContainEqual(customTextStyle);
  });

  it('calls the onPress function when pressed', () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(
      <Button onPress={mockOnPress} title="Press Me" />
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
