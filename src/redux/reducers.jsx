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
