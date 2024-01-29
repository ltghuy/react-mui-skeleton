import { createRoot } from 'react-dom/client';

import { App } from './App';
import { loadPolyfill } from './polyfill';

loadPolyfill().then(() => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  }
});
