import { render, screen } from '@tests';

import { PtnSvgIcon } from './PtnSvgIcon';

describe('PtnSvgIcon', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnsvg-icon';
    render(<PtnSvgIcon data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
