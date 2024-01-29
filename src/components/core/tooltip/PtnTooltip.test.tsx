import { PtnIcon } from '@components/core/icon/PtnIcon';
import { PtnIconButton } from '@components/core/icon-button/PtnIconButton';
import { fireEvent, render, screen } from '@tests';

import { PtnTooltip } from './PtnTooltip';

describe('PtnTooltip', () => {
  it('Should render component without crash', () => {
    const TEST_ID = 'tri-ptntooltip';
    render(
      <PtnTooltip title='I am tooltip' data-testid={TEST_ID}>
        <PtnIconButton>
          <PtnIcon icon='fe:heart' />
        </PtnIconButton>
      </PtnTooltip>
    );

    const tooltip = screen.getByTestId(TEST_ID);
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toBeVisible();
    fireEvent.mouseOver(tooltip);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
