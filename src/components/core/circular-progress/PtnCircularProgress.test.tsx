import { render, screen } from '@tests';

import { PtnCircularProgress } from './PtnCircularProgress';

describe('PtnCircularProgress', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptncircular-progress';
    render(<PtnCircularProgress data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
