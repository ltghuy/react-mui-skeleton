import { render, screen } from '@tests';

import { PtnStack } from '../stack/PtnStack';

import { PtnIcon } from './PtnIcon';

describe('PtnIcon', () => {
  jest.mock('@mui/material', () => ({
    ...jest.requireActual('@mui/material'),
    useTheme: () => ({
      palette: {
        primary: {
          main: '#000000',
        },
      },
    }),
  }));

  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnicon';
    render(
      <PtnStack data-testid={TEST_ID}>
        <PtnIcon icon='fe:heart' color='red' />
      </PtnStack>
    );
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it('Should render component with color path', () => {
    const TEST_ID = 'tri-ptnicon';
    render(
      <PtnStack data-testid={TEST_ID}>
        <PtnIcon icon='fe:heart' color='primary.main' />
      </PtnStack>
    );

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
