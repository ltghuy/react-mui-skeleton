import { render, screen } from '@tests';

import { PtnBox } from './PtnBox';

describe('PtnBox', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptnbox';
    render(<PtnBox data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
