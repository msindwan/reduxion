/**
 * Reduxion Reducer
 *
 * @Author : Mayank Sindwani
 * @Date   : 2016-12-22
 *
 * Description : An abstract base class representing a store model.
 **/

export default class Reducer {

    constructor(name, initialState) {
        // Initialize the reducer.
        if (new.target === Reducer) {
            throw new TypeError("Cannot construct Abstract Reducer");
        }
        this.name = name;
        this.state = Object.assign({}, initialState);
    }

    setState(newState) {
        // Sets the state.
        this.state = Object.assign({}, this.state, newState);
    }

    getState() {
        // Returns the current state.
        return this.state;
    }

}
