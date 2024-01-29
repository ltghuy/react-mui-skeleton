import { render, screen } from '@tests';

import { PtnIconButton } from './PtnIconButton';

describe('PtnIconButton', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnicon-button';
    render(<PtnIconButton data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
