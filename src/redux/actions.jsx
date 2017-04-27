export var streaming = (src) => {
return {
    type: 'SET_STREAM',
    src
  };
};


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

export var onPreview = (preview) => {
  return {
    type: 'PREVIEW',
    preview
  };
};

export var downloaded = (downloaded) => {
  return {
    type: 'DOWNLOADED',
    downloaded
  };
};


// export var save = (uploadSuccess) => {
//   return {
//
//   };
// }
