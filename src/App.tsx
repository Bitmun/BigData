import { store } from 'core/store/store';
import { Provider } from 'react-redux';
import { AppRouter } from 'router/AppRouter';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
