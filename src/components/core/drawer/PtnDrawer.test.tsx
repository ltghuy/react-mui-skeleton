import { render, screen } from '@tests';

import { PtnDrawer } from './PtnDrawer';

describe('PtnDrawer', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptndrawer';
    render(<PtnDrawer open variant='persistent' data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
