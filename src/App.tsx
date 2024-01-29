import { Provider } from 'react-redux';
import { AppTheme } from '@components/theme/AppTheme';
import { AppQueryClientProvider } from '@contexts/AppQueryClientProvider';
import { persistor, rootStore } from '@stores';
import { PersistGate } from 'redux-persist/integration/react';

import { AppRouter } from './routes/AppRouter';

export const App = () => {
  return (
    <Provider store={rootStore}>
      <PersistGate loading={null} persistor={persistor}>
        <AppTheme>
          <AppQueryClientProvider>
            <AppRouter />
          </AppQueryClientProvider>
        </AppTheme>
      </PersistGate>
    </Provider>
  );
};
