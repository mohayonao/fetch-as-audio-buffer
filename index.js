(function(global, factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    // AMD
    define([], function() {
      return factory(global);
    });
  } else if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    // CommonJS
    module.exports = factory(global);
  } else {
    // Browser globals
    global.fetchAsAudioBuffer = factory(global);
  }

})((this || 0).self || global, function(global) {

  function fetchAsArrayBuffer(url) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();

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

  return fetchAsAudioBuffer;
});
