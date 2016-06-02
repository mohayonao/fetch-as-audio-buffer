# fetchAsAudioBuffer
[![NPM Version](http://img.shields.io/npm/v/fetch-as-audio-buffer.svg?style=flat-square)](https://www.npmjs.org/package/fetch-as-audio-buffer)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> util function to fetch audio buffer

## Installation

```
npm install fetch-as-audio-buffer
```

downloads:

- [fetch-as-audio-buffer.js](https://raw.githubusercontent.com/mohayonao/fetch-as-audio-buffer/master/build/fetch-as-audio-buffer.js)
- [fetch-as-audio-buffer.min.js](https://raw.githubusercontent.com/mohayonao/fetch-as-audio-buffer/master/build/fetch-as-audio-buffer.min.js)

## API
- `fetchAsAudioBuffer(audioContext, url): any`
  - `audioContext: AudioContext`
  - `url: string` url of target file - returns `Promise<AudioBuffer>`
  - `url: string[]` case of multiple targets - returns `Promise<AudioBuffer[]>`

## Usage

```js
var audioContext = new AudioContext();

fetchAsAudioBuffer(audioContext, "amen.wav").then(function(result) {
  console.log(result); // result is AudioBuffer
});
```

```js
var audioContext = new AudioContext();

fetchAsAudioBuffer(audioContext, [ "bd.wav", "sd.wav", "hh.wav" ]).then(function(result) {
  console.log(result); // result is Array of AudioBuffer
});
```

## License

MIT
