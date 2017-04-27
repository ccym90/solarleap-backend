import { createStore, compose, combineReducers } from 'redux';
import { streamingReducer, recordingReducer, stopRecordingReducer, downloadReducer, previewReducer, savingReducer} from './reducers';

export let initStore = () => {

  const reducer = combineReducers({
    src: streamingReducer,
    recording: recordingReducer,
    stopping: stopRecordingReducer,
    downloaded: downloadReducer,
    preview: previewReducer,
    save: savingReducer
  });

  const initialState = {
    recordVideo: null,
    src: null,
    preview: null,
    download: null,
    recording: false,
    recorded: false,
    downloaded: false,
    uploadSuccess: null
  };

  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
