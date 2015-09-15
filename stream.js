var util = require('util')
var RealStream = require('stream').Stream

var MockStream = module.exports = function () {
  this.pipes = []
  RealStream.call(this)
}
util.inherits(MockStream, RealStream)

MockStream.prototype.pipe = function (dest, opts) {
  RealStream.prototype.pipe.call(this, dest, opts)
  // TODO: meh on opts rn
  this.pipes.push(dest)
}
