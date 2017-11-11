/**
 * tests/store.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 * @Description : Reduxion store tests.
 *
 * The MIT License(MIT)
 * Copyright(c) 2016 Mayank Sindwani
 **/

import GlobalDispatcher from '../src/dispatcher';
import Action           from '../src/action';
import Reducer          from '../src/reducer';
import Store            from '../src/store';
import chai             from 'chai';

// Define custom reducers.
class ReducerA extends Reducer {
    constructor(name) {
        super(name, {
            value: ''
        });
    }

    change(value) {
        this.setState({
            value: value
        });
    }
}

class ReducerB extends Reducer {
    constructor(name) {
        super(name, {
            value: ''
        });
    }

    change(value) {
        this.setState({
            value: value
        });
    }
}

export default function () {

    it("Creates a store with n reducers", done => {
        const reducerA = new ReducerA("ReducerA");
        const reducerB = new ReducerB("ReducerB");
        const store = new Store(reducerA, reducerB);

        chai.expect(store._reducers[0]).to.equal(reducerA);
        chai.expect(store._reducers[1]).to.equal(reducerB);
        chai.expect(store._store['ReducerA']).to.equal(reducerA.getState());
        chai.expect(store._store['ReducerB']).to.equal(reducerB.getState());
        done();
    });

    it("Emits actions and triggers corresponding reducer functions", done => {
        const reducerA = new ReducerA("ReducerA");
        const reducerB = new ReducerB("ReducerB");
        const store = new Store(reducerA, reducerB);

        store.subscribe(( _, store) => {
            chai.expect(store["ReducerA"]).to.deep.equal({
                value: 'Test'
            });
            chai.expect(store["ReducerB"]).to.deep.equal({
                value: 'Test'
            });
            done();
        });

        const changeValue = new Action('change', value => {
            return value;
        });

        changeValue('Test');
    });

    afterEach(() => {
        // Nuke distatcher listeners.
        GlobalDispatcher._listeners = [];
    });

};
