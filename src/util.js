var Abstract = require('./Abstract');

// a function to extend a class
function _extend(subClass, superClass) {
  var F = function () { };
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
}

function extend(subClass, superClass) {
  subClass.prototype = { ...superClass.prototype, ...subClass.prototype };
}
function _export(target) {
  var targetObject = target();
  return function () {
    extend(targetObject, Abstract);
    return targetObject;
  }
}
module.exports = {
  extend,
  _export
}