const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');

module.exports = withImages(
  withTypescript({
    webpack: function(config) {
      return config;
    }
  })
);
