/**
 * tests/reducer.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 * @Description : Reduxion reducer tests.
 *
 * The MIT License(MIT)
 * Copyright(c) 2016 Mayank Sindwani
 **/

import GlobalDispatcher from '../src/dispatcher';
import Action           from '../src/action';
import Reducer          from '../src/reducer';
import chai             from 'chai';

// Define custom reducers.
class ReducerA extends Reducer {
    constructor(name) {
        super(name, {
            value: ''
        });
    }
}

export default function () {

    it("Creates a reducer", done => {
        const reducerA = new ReducerA("ReducerA");
        chai.expect(reducerA.getState()).to.deep.equal({ value: '' });
        chai.expect(reducerA.name).to.equal("ReducerA");
        done();
    });

    it("Sets the correct state", done => {
        const reducerA = new ReducerA("ReducerA");
        chai.expect(reducerA.getState()).to.deep.equal({ value: '' });
        reducerA.setState({
            value: 'Test',
            another: 'One'
        });
        chai.expect(reducerA.getState()).to.deep.equal({
            value: 'Test',
            another: 'One'
        });
        done();
    });

    afterEach(() => {
        // Nuke distatcher listeners.
        GlobalDispatcher._listeners = [];
    });

};
