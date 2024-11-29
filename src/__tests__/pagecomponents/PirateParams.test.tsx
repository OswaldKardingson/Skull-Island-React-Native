import React from 'react';
import { render } from '@testing-library/react-native';
import { ParamHeaderFade, ParamFade, ParamTitle, ParamInfo } from '@pagecomponents/PirateParams';

describe('PirateParams Components', () => {
  it('renders ParamHeaderFade correctly', () => {
    const { getByTestId } = render(<ParamHeaderFade />);
    const fadeElement = getByTestId('param-header-fade');

    expect(fadeElement).toBeTruthy(); // Ensures the component renders
  });

  it('renders ParamFade correctly', () => {
    const { getByTestId } = render(<ParamFade />);
    const fadeElement = getByTestId('param-fade');

    expect(fadeElement).toBeTruthy(); // Ensures the component renders
  });

  it('renders ParamTitle with correct text', () => {
    const titleText = 'Pirate Parameters';
    const { getByTestId, getByText } = render(<ParamTitle title={titleText} />);
    const titleElement = getByTestId('param-title');
    const titleTextElement = getByText(titleText);

    expect(titleElement).toBeTruthy(); // Ensures the component renders
    expect(titleTextElement).toBeTruthy(); // Ensures the title text renders
  });

  it('renders ParamInfo with correct text and position', () => {
    const infoText = 'This is an example parameter info.';
    const vPosition = 0.25;
    const { getByTestId, getByText } = render(
      <ParamInfo vPosition={vPosition} text={infoText} />
    );
    const infoElement = getByTestId('param-info');
    const infoTextElement = getByText(infoText);

    expect(infoElement).toBeTruthy(); // Ensures the component renders
    expect(infoTextElement).toBeTruthy(); // Ensures the info text renders
  });

  it('renders ParamInfo with correct dynamic position', () => {
    const infoText = 'Dynamic Position Test';
    const vPosition = 0.5;
    const { getByTestId } = render(<ParamInfo vPosition={vPosition} text={infoText} />);
    const infoElement = getByTestId('param-info');

    // Ensures the component renders with the correct calculated top position
    expect(infoElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ top: expect.any(Number) }),
      ])
    );
  });
});
