module.exports = (function () {
  function Abstract() {

  }
  Abstract.prototype.getFullJson = function () {
    return JSON.stringify(this, null, 2);
  }
  return Abstract;
})();