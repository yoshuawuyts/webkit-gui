# webkit-gui
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Get the node-webkit [`gui`][gui] object in a nice-ish manner.

## Installation
```bash
npm install webkit-gui
```

## Usage
```js
var gui = require('gui');
```

## See also
- [node-webkit window object][gui]

## Why?
The actual code for retrieving the `gui` object in node-webkit is pretty long,
this should provide a much neater solution for retrieving that.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/webkit-gui.svg?style=flat-square
[npm-url]: https://npmjs.org/package/webkit-gui
[travis-image]: https://img.shields.io/travis/yoshuawuyts/webkit-gui.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/webkit-gui
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/webkit-gui.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/webkit-gui?branch=master
[downloads-image]: http://img.shields.io/npm/dm/webkit-gui.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/webkit-gui

[gui]: https://github.com/rogerwang/node-webkit/wiki/Window#synopsis
