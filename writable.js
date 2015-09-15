var util = require('util')
var RealWritable = require('stream').Writable

var MockWritable = module.exports = function () {
  this.chunks = []
  RealWritable.call(this)
}
util.inherits(MockWritable, RealWritable)

MockWritable.prototype._write = function (chunk, encoding, cb) {
  this.chunks.push(chunk);
};
