"use strict";

function fetchAsArrayBuffer(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";

    xhr.onload = function() {
      if (xhr.response) {
        resolve(xhr.response);
      }
    };
    xhr.onerror = reject;

    xhr.send();
  });
}

function decodeAudioData(audioContext, arrayBuffer) {
  return new Promise(function(resolve, reject) {
    audioContext.decodeAudioData(arrayBuffer, resolve, reject);
  });
}

function fetchAsAudioBuffer(audioContext, url) {
  if (Array.isArray(url)) {
    return Promise.all(url.map(function(url) {
      return fetchAsAudioBuffer(audioContext, url);
    }));
  }
  return fetchAsArrayBuffer(url).then(function(arrayBuffer) {
    return decodeAudioData(audioContext, arrayBuffer);
  });
}

module.exports = fetchAsAudioBuffer;
