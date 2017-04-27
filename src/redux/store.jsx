import { createStore, compose, combineReducers } from 'redux';
import { streamingReducer } from './reducers';

export let initStore = () => {

  const reducer = combineReducers({
    src: streamingReducer
  });

  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
