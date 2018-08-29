const { process } = require('ts-jest');
const { loader } = require('jsx-controls-loader');

class T {
  process(src, filename, config, options) {
    // Write TS here
    const source = filename.match(/\.tsx/) ? loader(src) : src;
    return process(source, filename, config, options);
  }
}

module.exports = new T();
