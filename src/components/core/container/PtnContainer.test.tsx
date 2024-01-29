import { render, screen } from '@tests';

import { PtnContainer } from './PtnContainer';

describe('PtnContainer', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptncontainer';
    render(<PtnContainer data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
