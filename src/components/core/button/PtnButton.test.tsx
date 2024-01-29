import { fireEvent, render, screen } from '@tests';

import { PtnButton } from './PtnButton';

describe('PtnButton', () => {
  it('Should render the specified label and register the click', () => {
    const onClick = jest.fn();
    const label = 'This is a button';

    render(<PtnButton onClick={onClick}>{label}</PtnButton>);

    const button = screen.getByRole('button');
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
