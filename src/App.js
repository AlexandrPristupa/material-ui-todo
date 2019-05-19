import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import getStore from './config/store';
import TodoContainer from './containers/todoContainer';
import CommentsConpainer from './containers/commentsContainer';
import LocaleContainer from './containers/localeContainer';

const App = () => {
  const { store, persistor } = getStore();

  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <PersistGate loading={null} persistor={persistor}>
          <aside className='aside'>
            <LocaleContainer />
          </aside>
          <main className='Todos'>
            <TodoContainer />
            <CommentsConpainer />
          </main>
        </PersistGate>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
