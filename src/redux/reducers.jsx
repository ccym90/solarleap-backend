<<<<<<< HEAD
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
=======
const initialState = {
  recordVideo: null,
  src: null,
  preview: null,
  download: null,
  recording: false,
  recorded: false,
  downloaded: false,
  uploadSuccess: false
};
>>>>>>> 024e0adcabd8e3610c614469483fa19274803847

export var streamingReducer = (state = initialState, action) => {
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

<<<<<<< HEAD
// export var stopStreamingReducer = (state = initialState.src, action) => {
//   switch (action.type) {
//     case 'STOP_STREAM':
//       return {
//         ...state,
//         src: null
//       }
//     default:
//       return state;
//   }
// };
=======
export var recordingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECORDING':
      return {
        ...state,
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
        recording: false,
        recorded: true,
      }
    default:
      return state;
  }
};

export var downloadReducer = (state = '', action) => {
  switch (action.type) {
    case 'DOWNLOADED':
      return {
        downloaded: true
      }
    default:
      return state;
  }
};
>>>>>>> 024e0adcabd8e3610c614469483fa19274803847
