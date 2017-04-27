export var streaming = (src) => {
return {
    type: 'SET_STREAM',
    src
  };
};

export var startRecording = (recordVideo, recording) => {
	return {
    type: 'RECORDING',
    recordVideo,
    recording
   };
};

export var stopRecording = (recordVideo, recording, recorded, download) => {
  return {
    type: 'STOP_RECORDING',
    recordVideo,
    recording,
    recorded,
    download
  };
};

// export var onPreview = (preview) => {
//   return {
//
//   };
// };
//
// export var download = () => {
//   return {
//
//   };
// };
//
// export var save = (uploadSuccess) => {
//   return {
//
//   };
// }
