/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var jsdom = require('jsdom').jsdom;
var gui = require('./index');

/**
 * Setup DOM env.
 */

beforeEach(function() {
});

/**
 * Test
 */

describe('gui', function() {
  it('should assert the environment', function() {
    gui.bind(gui)
      .should.throw('webkit-gui: window should exist');

    global.document = jsdom('<html><body></body></html>');
    global.window = document.parentWindow;

    gui.bind(gui)
      .should.throw('webkit-gui: nwDispatcher should be an object');

    global.window.nwDispatcher = {};

    gui.bind(gui)
      .should.throw('webkit-gui: requireNwGui should be a function');
  });

  it('should return an object', function() {
    global.document = jsdom('<html><body></body></html>');
    global.window = document.parentWindow;
    global.window.nwDispatcher = {};
    global.window.nwDispatcher.requireNwGui = function() {return {}};

    gui().should.be.of.type('object');
  });
});
