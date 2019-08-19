/**
 * tests/dispatcher.js
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-11-10
 *
 * @Description : Reduxion dispatcher tests.
 **/

import GlobalDispatcher from '../src/dispatcher';

describe('Dispatcher', () => {

    it("Should subscribe listeners", done => {
        const event1 = function() { /* noop */ };
        const event2 = function() { /* noop */ };
        const event3 = function() { /* noop */ };
        GlobalDispatcher.subscribe(event1);
        GlobalDispatcher.subscribe(event2);
        GlobalDispatcher.subscribe(event3);

        expect(GlobalDispatcher._listeners.length).toEqual(3);
        expect(GlobalDispatcher._listeners[0]).toEqual(event1);
        expect(GlobalDispatcher._listeners[1]).toEqual(event2);
        expect(GlobalDispatcher._listeners[2]).toEqual(event3);
        done();
    });

    it("Should unsubscribe listeners", done => {
        const event1 = function() { /* noop */ };
        const event2 = function() { /* noop */ };
        const event3 = function() { /* noop */ };
        GlobalDispatcher.subscribe(event1);
        GlobalDispatcher.subscribe(event2);
        GlobalDispatcher.subscribe(event3);
        expect(GlobalDispatcher._listeners.length).toEqual(3);

        // Remove the second event and assert the order of the remaining two.
        GlobalDispatcher.unsubscribe(event2);
        expect(GlobalDispatcher._listeners.length).toEqual(2);
        expect(GlobalDispatcher._listeners[0]).toEqual(event1);
        expect(GlobalDispatcher._listeners[1]).toEqual(event3);

        // Try removing the second event again and assert that an exception
        // isn't raised. The number of events should not change.
        GlobalDispatcher.unsubscribe(event2);
        expect(GlobalDispatcher._listeners.length).toEqual(2);

        // Remove the third event.
        GlobalDispatcher.unsubscribe(event3);
        expect(GlobalDispatcher._listeners.length).toEqual(1);
        expect(GlobalDispatcher._listeners[0]).toEqual(event1);

        // Remove the first event.
        GlobalDispatcher.unsubscribe(event1);
        expect(GlobalDispatcher._listeners.length).toEqual(0);
        done();
    });

    it("Should emit events", done => {
        const event1 = function(type, data) {
            expect(type).toEqual(0);
            expect(data).toEqual(1);
            done();
        };
        GlobalDispatcher.subscribe(event1);
        GlobalDispatcher.emit(0, 1);
    });

    afterEach(() => {
        // Nuke dispatcher listeners.
        GlobalDispatcher._listeners = [];
    });

});
