'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (action, func) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var state = func.apply(this, args);
        _dispatcher2.default.emit(action, state);
    };
};

var _dispatcher = require('./dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }