var os = require('os');
var osRelease = parseFloat(os.release());

if (osRelease < 17 ) {
  throw new Error("OS < 17 not supported");
} else {
  var events = require('events');
  var util = require('util');
  var BlenoMac = require('./native/binding.node').BlenoMac;
  util.inherits(BlenoMac, events.EventEmitter);
  module.exports = new BlenoMac();
}