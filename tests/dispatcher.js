/**
 * tests/dispatcher.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 *
 * @Description : Reduxion dispatcher tests.
 **/

import GlobalDispatcher from '../src/dispatcher';
import chai from 'chai';

export default function () {

    it("Should subscribe listeners", done => {
        const event1 = function() { /* noop */ };
        const event2 = function() { /* noop */ };
        const event3 = function() { /* noop */ };
        GlobalDispatcher.subscribe(event1);
        GlobalDispatcher.subscribe(event2);
        GlobalDispatcher.subscribe(event3);

        chai.expect(GlobalDispatcher._listeners.length).to.equal(3);
        chai.expect(GlobalDispatcher._listeners[0]).to.equal(event1);
        chai.expect(GlobalDispatcher._listeners[1]).to.equal(event2);
        chai.expect(GlobalDispatcher._listeners[2]).to.equal(event3);
        done();
    });

    it("Should unsubscribe listeners", done => {
        const event1 = function() { /* noop */ };
        const event2 = function() { /* noop */ };
        const event3 = function() { /* noop */ };
        GlobalDispatcher.subscribe(event1);
        GlobalDispatcher.subscribe(event2);
        GlobalDispatcher.subscribe(event3);
        chai.expect(GlobalDispatcher._listeners.length).to.equal(3);

        // Remove the second event and assert the order of the remaining two.
        GlobalDispatcher.unsubscribe(event2);
        chai.expect(GlobalDispatcher._listeners.length).to.equal(2);
        chai.expect(GlobalDispatcher._listeners[0]).to.equal(event1);
        chai.expect(GlobalDispatcher._listeners[1]).to.equal(event3);

        // Try removing the second event again and assert that an exception
        // isn't raised. The number of events should not change.
        GlobalDispatcher.unsubscribe(event2);
        chai.expect(GlobalDispatcher._listeners.length).to.equal(2);

        // Remove the third event.
        GlobalDispatcher.unsubscribe(event3);
        chai.expect(GlobalDispatcher._listeners.length).to.equal(1);
        chai.expect(GlobalDispatcher._listeners[0]).to.equal(event1);

        // Remove the first event.
        GlobalDispatcher.unsubscribe(event1);
        chai.expect(GlobalDispatcher._listeners.length).to.equal(0);
        done();
    });

    it("Should emit events", done => {
        const event1 = function(type, data) {
            chai.expect(type).to.equal(0);
            chai.expect(data).to.equal(1);
            done();
        };
        GlobalDispatcher.subscribe(event1);
        GlobalDispatcher.emit(0, 1);
    });

    afterEach(() => {
        // Nuke dispatcher listeners.
        GlobalDispatcher._listeners = [];
    });

};
