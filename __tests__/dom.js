const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
};

global.window = window;
//needed for semantic-ui
// -> https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/debug.js
global.window.localStorage = '';
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
