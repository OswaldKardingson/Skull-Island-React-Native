import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../components/Button'; // Adjust the path as needed

describe('Button Component', () => {
  it('renders the button with default styles and title', () => {
    const { getByText } = render(<Button title="Click Me" />);
    const buttonText = getByText('Click Me');

    expect(buttonText).toBeTruthy(); // Ensure the button text is rendered
    expect(buttonText.props.style).toEqual(
      expect.arrayContaining([{ color: '#fff', fontSize: 16, fontWeight: '600' }])
    );
  });

  it('calls the onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Press Me" onPress={onPressMock} />);

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1); // Ensure the onPress function is called
  });

  it('applies custom styles to the button', () => {
    const customStyle = { backgroundColor: 'red' };
    const customTextStyle = { color: 'yellow' };

    const { getByText } = render(
      <Button title="Styled Button" style={customStyle} textStyle={customTextStyle} />
    );

    const buttonText = getByText('Styled Button');
    expect(buttonText.props.style).toEqual(
      expect.arrayContaining([{ color: 'yellow' }])
    );
  });
});
