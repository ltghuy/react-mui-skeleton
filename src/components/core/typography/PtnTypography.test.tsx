import { render, screen } from '@tests';

import { PtnTypography } from './PtnTypography';

describe('PtnTypography', () => {
  const LABEL = 'Typography label';

  it('Should render typography', () => {
    render(<PtnTypography>{LABEL}</PtnTypography>);
    expect(screen.getByText(LABEL)).toBeInTheDocument();
  });

  it('Should render typography with color', () => {
    const { getByText } = render(
      <PtnTypography color='text.primary'>{LABEL}</PtnTypography>
    );
    expect(getByText(LABEL)).toBeInTheDocument();
  });
  it('Should render typography with ellipsis lines', () => {
    const { getByText } = render(
      <PtnTypography ellipsisLines={1}>{LABEL}</PtnTypography>
    );
    expect(getByText(LABEL)).toBeInTheDocument();
  });
});
