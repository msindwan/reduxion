"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Reduxion Dispatcher
 *
 * @Author : Mayank Sindwani
 * @Date   : 2016-12-22
 *
 * Description : Exposes a dispatcher class as well as a global dispatcher for actions.
 **/

var Dispatcher = function () {
    function Dispatcher() {
        _classCallCheck(this, Dispatcher);

        // Initialize listeners.
        this._listeners = [];
    }

    _createClass(Dispatcher, [{
        key: "subscribe",
        value: function subscribe(listener) {
            // Add a listener.
            this._listeners.push(listener);
        }
    }, {
        key: "unsubscribe",
        value: function unsubscribe(listener) {
            // Remove a listener.
            var index = this._listeners.index(listener);
            if (index > -1) {
                this._listeners.splice(1, index);
            }
        }
    }, {
        key: "emit",
        value: function emit(type, data) {
            // Dispatch the event to all listeners.
            this._listeners.forEach(function (listener) {
                listener(type, data);
            });
        }
    }]);

    return Dispatcher;
}();

exports.default = new Dispatcher();
exports.Dispatcher = Dispatcher;