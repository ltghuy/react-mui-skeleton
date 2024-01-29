import { render, screen } from '@tests';

import { PtnStack } from './PtnStack';

describe('PtnStack', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnstack';
    render(<PtnStack data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
