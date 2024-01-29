import { render, screen } from '@tests';

import { PtnToolbar } from './PtnToolbar';

describe('PtnToolbar', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptntool-bar';
    render(<PtnToolbar data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
