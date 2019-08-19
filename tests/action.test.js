/**
 * tests/action.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 *
 * @Description : Reduxion action tests.
 **/

import GlobalDispatcher from '../src/dispatcher';
import { Action } from '../src/index';

describe('Actions', () => {

    it("Should wrap the action and accept a function with n arguments", done => {
        const noop = Action('noop', (a, b, c) => {
            // Expect all arguments to be provided.
            expect(a).toEqual(1);
            expect(b).toEqual(2);
            expect(c).toEqual(3);
            done();
            return null;
        });

        noop(1, 2, 3);
    });

    it("Should dispatch a global event", done => {
        // Expect the global dispatcher to call the subscriber.
        GlobalDispatcher.subscribe((type, data) => {
            expect(type).toEqual('noop');
            expect(data).toEqual('Test');
            done();
        });

        Action('noop', arg => {
            return arg;
        })('Test');
    });

    afterEach(() => {
        // Nuke dispatcher listeners.
        GlobalDispatcher._listeners = [];
    });

});
