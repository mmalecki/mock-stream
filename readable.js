var util = require('util')
var RealReadable = require('stream').Readable

var MockReadable = module.exports = function () {
  this.pipes = []
  RealReadable.call(this)
}
util.inherits(MockReadable, RealReadable)

MockReadable.prototype.pipe = function (dest, opts) {
  var ret = RealReadable.prototype.pipe.call(this, dest, opts)
  // TODO: meh on opts rn
  this.pipes.push(dest)
  return ret
}

MockReadable.prototype.unpipe = function (dest) {
  var ret = RealReadable.prototype.unpipe.call(this, dest)
  var index = this.pipes.indexOf(dest)
  if (index !== -1) this.pipes.splice(index)
  return ret
}
