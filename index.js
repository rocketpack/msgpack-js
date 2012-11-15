( // Module boilerplate to support browser globals, node.js and AMD.
  (typeof module !== "undefined" && function (m) { module.exports = m(); }) ||
  (typeof define === "function" && function (m) { define("msgpack-js", m); }) ||
  (function (m) { window.msgpack = m(); })
)(function () {

if (typeof(Buffer) !== 'undefined')
  return require('./msgpack-buffer');

return require('./msgpack-browser');

});
