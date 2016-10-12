require('babel-register')({
  presets: ["react", "es2015"]
});

require('babel-polyfill');

//we need an instance of the document

// global.document = require('jsdom').jsdom(
//   "<head><meta charset='UTF-8'><title>React In Theory</title></head><body><div id='application'></div><script type='text/javascript' src='main.bundle.js'></script></body>"
// );

//and an instance of the window
global.window = document.defaultView
global.navigator = window.navigator;
