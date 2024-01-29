import { render, screen } from '@tests';

import { PtnAvatar } from './PtnAvatar';

describe('PtnAvatar', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnavatar';
    render(<PtnAvatar data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
