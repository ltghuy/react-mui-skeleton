import { render, screen } from '@tests';

import { PtnPaper } from './PtnPaper';

describe('PtnPaper', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnpaper';
    render(<PtnPaper data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
