import { render, screen } from '@tests';

import { PtnAppBar } from './PtnAppBar';

describe('PtnAppBar', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnapp-bar';
    render(<PtnAppBar data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
