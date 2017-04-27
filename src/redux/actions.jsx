export var streaming = (src) => {
return {
    type: 'SET_STREAM',
    src
  };
};

<<<<<<< HEAD
// export var stopStreaming = () => {
// return {
//     type: 'STOP_STREAM',
//
//   };
// };

// export var startRecording = (recordVideo, recording) => {
// 	return {
//    };
// };
//
// export var stopRecording = (recording, recorded, download) => {
//   return {
//
//   };
// };
//
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
=======
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

export var onPreview = () => {
  return {

  };
};

export var downloaded = (downloaded) => {
  return {
    type: 'DOWNLOADED',
    downloaded
  };
};

>>>>>>> 024e0adcabd8e3610c614469483fa19274803847
// export var save = (uploadSuccess) => {
//   return {
//
//   };
// }
