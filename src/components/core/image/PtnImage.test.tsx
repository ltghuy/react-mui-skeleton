import { render, screen } from '@tests';

import { PtnImage } from './PtnImage';

describe('PtnImage', () => {
  it('Should render image', () => {
    const src = 'https://picsum.photos/536/354';
    const TEST_ID = 'tri-ptnimage';

    const { getByRole } = render(<PtnImage src={src} data-testid={TEST_ID} />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', src);
  });
});
