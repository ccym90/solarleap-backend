// const initialState = {
//   recordVideo: null,
//   src: null,
//   preview: null,
//   download: null,
//   recording: false,
//   recorded: false,
//   downloaded: false,
//   uploadSuccess: null
// };

export var streamingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_STREAM':
      return {
        ...state,
        src: action.src
      }
    default:
      return state;
  }
};

export var recordingReducer = (state = '', action) => {
  switch (action.type) {
    case 'RECORDING':
      return {
        ...state,
        recordVideo: action.recordVideo,
        recording: true
      }
    default:
      return state;
  }
};

export var stopRecordingReducer = (state = '', action) => {
  switch (action.type) {
    case 'STOP_RECORDING':
      return {
        ...state,
        recordVideo: action.recordVideo,
        recording: false,
        recorded: true,
        download: action.download
      }
    default:
      return state;
  }

}
