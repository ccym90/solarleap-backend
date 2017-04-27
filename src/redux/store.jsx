import { createStore, compose, combineReducers } from 'redux';
import { streamingReducer, recordingReducer, stopRecordingReducer, downloadReducer} from './reducers';

export let initStore = () => {

  const reducer = combineReducers({
    src: streamingReducer,
<<<<<<< HEAD
    // stopStreamingReducer

=======
    recording: recordingReducer,
    stopping: stopRecordingReducer,
    downloaded: downloadReducer
    // recording: recordingReducer
>>>>>>> 024e0adcabd8e3610c614469483fa19274803847
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
