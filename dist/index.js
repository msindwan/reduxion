'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.Action = exports.Reducer = undefined;

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Reducer = _reducer2.default;
exports.Action = _action2.default;
exports.Store = _store2.default; /**
                                  * Reduxion
                                  *
                                  * @Author : Mayank Sindwani
                                  * @Date   : 2016-12-22
                                  *
                                  * Description : Entry point.
                                  **/