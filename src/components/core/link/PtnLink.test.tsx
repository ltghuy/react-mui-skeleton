import { MemoryRouter } from 'react-router';
import { render, screen } from '@tests';

import { PtnLink } from './PtnLink';

describe('PtnLink', () => {
  it('Should renders a link', () => {
    render(
      <MemoryRouter>
        <PtnLink to='/about'>About</PtnLink>
      </MemoryRouter>
    );

    const linkElement = screen.getByText('About');
    expect(linkElement).toBeInTheDocument();
  });
  it('Should have the correct href attribute', () => {
    render(
      <MemoryRouter>
        <PtnLink to='/about'>About</PtnLink>
      </MemoryRouter>
    );

    const linkElement = screen.getByText('About');
    expect(linkElement).toHaveAttribute('href', '/about');
  });
});
