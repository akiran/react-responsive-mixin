var enquire = require('enquire.js');
var json2mq = require('json2mq');

var ResponsiveMixin = {
  media: function (mediaQuery, handler) {
    mediaQuery = json2mq(mediaQuery);
    if (typeof handler === 'function') {
      handler = {
        match: handler
      };
    }
    enquire.register(mediaQuery, handler);
  }
};

module.exports = ResponsiveMixin;