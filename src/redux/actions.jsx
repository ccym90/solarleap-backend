export var streaming = (src) => {
return {
    type: 'SET_STREAM',
    src
  };
};

export var beginRecording = (recordVideo, recording) => {
	return {
    type: 'RECORDING',
    recording
   };
};

export var finishingRecording = (recording, recorded) => {
  return {
    type: 'STOP_RECORDING',
    recording,
    recorded,
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
