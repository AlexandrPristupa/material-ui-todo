import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='vending-machine'>
        <p>App</p>
      </div>
    </Provider>
  );
};

export default App;
