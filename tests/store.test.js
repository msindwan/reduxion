/**
 * tests/store.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 *
 * @Description : Reduxion store tests.
 **/

import GlobalDispatcher from '../src/dispatcher';
import Action           from '../src/action';
import Reducer          from '../src/reducer';
import Store            from '../src/store';

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

describe('Store', () => {

    it("Creates a store with n reducers", done => {
        const reducerA = new ReducerA("ReducerA");
        const reducerB = new ReducerB("ReducerB");
        const store = new Store(reducerA, reducerB);

        expect(store._reducers[0]).toEqual(reducerA);
        expect(store._reducers[1]).toEqual(reducerB);
        expect(store._store['ReducerA']).toEqual(reducerA.getState());
        expect(store._store['ReducerB']).toEqual(reducerB.getState());
        done();
    });

    it("Emits actions and triggers corresponding reducer functions", done => {
        const reducerA = new ReducerA("ReducerA");
        const reducerB = new ReducerB("ReducerB");
        const store = new Store(reducerA, reducerB);

        store.subscribe(( _, store) => {
            expect(store["ReducerA"]).toEqual({
                value: 'Test'
            });
            expect(store["ReducerB"]).toEqual({
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
        // Nuke dispatcher listeners.
        GlobalDispatcher._listeners = [];
    });

});
