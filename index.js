/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Expose `nwGui()`.
 */

module.exports = nwGui;

/**
 * Expose node-webkit gui object.
 *
 * @api public
 */

function nwGui() {
  assert(global.window, 'webkit-gui: window should exist');
  var nwDispatcher = global.window.nwDispatcher;

  assert.equal(typeof nwDispatcher, 'object', 'webkit-gui: nwDispatcher should be an object');
  assert.equal(typeof nwDispatcher.requireNwGui, 'function', 'webkit-gui: requireNwGui should be a function');

  return global.window.nwDispatcher.requireNwGui();
}
