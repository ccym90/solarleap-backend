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

export var streaming = (state = '', action) => {
  switch (action.type) {
    case 'SET_STREAM':
      return action.src;
    default:
      return state;
  }
};
