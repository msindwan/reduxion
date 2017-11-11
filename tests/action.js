/**
 * tests/action.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 * @Description : Reduxion action tests.
 *
 * The MIT License(MIT)
 * Copyright(c) 2016 Mayank Sindwani
 **/

import GlobalDispatcher from '../src/dispatcher';
import { Action } from '../src/index';
import chai from 'chai';

export default function () {

    it("Should wrap the action and accept a function with n arguments", done => {
        const noop = Action('noop', (a, b, c) => {
            // Expect all arguments to be the provided.
            chai.expect(a).to.equal(1);
            chai.expect(b).to.equal(2);
            chai.expect(c).to.equal(3);
            done();
            return null;
        });

        noop(1, 2, 3);
    });

    it("Should dispatch a global event", done => {
        // Expect the global distatcher to call the subscriber.
        GlobalDispatcher.subscribe((type, data) => {
            chai.expect(type).to.equal('noop');
            chai.expect(data).to.equal('Test');
            done();
        });

        const noop = Action('noop', arg => {
            return arg;
        })('Test');
    });

    afterEach(() => {
        // Nuke distatcher listeners.
        GlobalDispatcher._listeners = [];
    });

};
