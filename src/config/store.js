import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './combineReducers';

const persistConfig = {
  key: 'rootReducer',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(persistedReducer, composeWithDevTools());
  console.log(store);
  const persistor = persistStore(store);
  return { store, persistor };
}
