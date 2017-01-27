'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dispatcher = require('./dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Reduxion Store
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author : Mayank Sindwani
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date   : 2016-12-22
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Description : Represents a collection of reducers and relays dispatched events.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                **/

var Store = function (_Dispatcher) {
    _inherits(Store, _Dispatcher);

    function Store() {
        _classCallCheck(this, Store);

        // Initialize reducers and the store.
        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
        // Initialize the dispatcher.


        for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
            reducers[_key] = arguments[_key];
        }

        _this._reducers = reducers;
        _this._store = {};

        _this._reducers.forEach(function (reducer) {
            _this._store[reducer.name] = reducer.getState();
        });
        _dispatcher2.default.subscribe(_this._reduce.bind(_this));
        return _this;
    }

    _createClass(Store, [{
        key: 'getState',
        value: function getState() {
            // Returns the state of the store.
            return this._store;
        }
    }, {
        key: '_reduce',
        value: function _reduce(type, data) {
            var _this2 = this;

            // Triggers events for each reducer.
            if (typeof type === 'undefined') {
                return;
            }
            this._reducers.forEach(function (reducer) {
                if (reducer[type]) {
                    reducer[type](data);
                    _this2._store[reducer.name] = reducer.getState();
                }
            });

            // Emit store changes.
            this.emit('reduce', this._store);
        }
    }]);

    return Store;
}(_dispatcher.Dispatcher);

exports.default = Store;