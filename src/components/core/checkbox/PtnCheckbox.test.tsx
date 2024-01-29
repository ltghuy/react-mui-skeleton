import { render, screen } from '@tests';

import { PtnCheckbox } from './PtnCheckbox';

describe('PtnCheckbox', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptncheckbox';
    render(<PtnCheckbox data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
