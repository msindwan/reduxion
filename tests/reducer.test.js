/**
 * tests/reducer.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 *
 * @Description : Reduxion reducer tests.
 **/

import GlobalDispatcher from '../src/dispatcher';
import Reducer          from '../src/reducer';

// Define custom reducers.
class ReducerA extends Reducer {
    constructor(name) {
        super(name, {
            value: ''
        });
    }
}

describe("Reducers", () => {

    it("Creates a reducer", done => {
        const reducerA = new ReducerA("ReducerA");
        expect(reducerA.getState()).toEqual({ value: '' });
        expect(reducerA.name).toEqual("ReducerA");
        done();
    });

    it("Sets the correct state", done => {
        const reducerA = new ReducerA("ReducerA");
        expect(reducerA.getState()).toEqual({ value: '' });
        reducerA.setState({
            value: 'Test',
            another: 'One'
        });
        expect(reducerA.getState()).toEqual({
            value: 'Test',
            another: 'One'
        });
        done();
    });

    afterEach(() => {
        // Nuke dispatcher listeners.
        GlobalDispatcher._listeners = [];
    });

});
