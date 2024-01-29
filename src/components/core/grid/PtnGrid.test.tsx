import { render, screen } from '@tests';

import { PtnGrid } from './PtnGrid';

describe('PtnGrid', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnpaper';
    render(<PtnGrid data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
