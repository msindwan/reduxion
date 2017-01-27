"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Reduxion Reducer
 *
 * @Author : Mayank Sindwani
 * @Date   : 2016-12-22
 *
 * Description : An abstract base class representing a store model.
 **/

var Reducer = function () {
    function Reducer(name, initialState) {
        _classCallCheck(this, Reducer);

        // Initialize the reducer.
        if (new.target === Reducer) {
            throw new TypeError("Cannot construct Abstract Reducer");
        }
        this.name = name;
        this.state = Object.assign({}, initialState);
    }

    _createClass(Reducer, [{
        key: "setState",
        value: function setState(newState) {
            // Sets the state.
            this.state = Object.assign({}, this.state, newState);
        }
    }, {
        key: "getState",
        value: function getState() {
            // Returns the current state.
            return this.state;
        }
    }]);

    return Reducer;
}();

exports.default = Reducer;