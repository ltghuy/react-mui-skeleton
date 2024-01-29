import { JSXElementConstructor, ReactElement } from 'react';
import { AppThemeProvider } from '@contexts/AppThemeProvider';
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';

export const TestWrapper: JSXElementConstructor<{
  children: React.ReactElement;
}> = ({ children }) => {
  return (
    <AppThemeProvider
      settings={{
        themeName: 'light',
        isCustomScrollbar: false,
      }}
    >
      {children}
    </AppThemeProvider>
  );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  baseRender(ui, { wrapper: TestWrapper, ...options }) as RenderResult;

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
