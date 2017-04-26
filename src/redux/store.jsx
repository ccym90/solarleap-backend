import { createStore, compose, combineReducers } from 'redux';
import { streaming } from './reducers';

export let initStore = () => {

  const reducer = combineReducers({
    src: streaming
  });

  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
