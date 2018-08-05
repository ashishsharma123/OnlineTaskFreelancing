import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)
 

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware();
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(createLogger())
  }
};


export default () => {
  let store = createStore(persistedReducer, getMiddleware())
  let persistor = persistStore(store)
  return { store, persistor }
}