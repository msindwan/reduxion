import GlobalDispatcher, { Dispatcher } from './dispatcher';

export default class Store extends Dispatcher {

	constructor(...reducers) {
		super();

		this._reducers = reducers;
		this._store = { };

		this._reducers.forEach(reducer => {
			this._store[reducer.name] = reducer.getState();
		});

		GlobalDispatcher.subscribe(this._reduce);
	}

	_reduce(type, data) {
		if (typeof data === 'undefined') {
			return;
		}
		this._reducers.forEach(reducer => {
			if (reducer[type]) {
				reducer[type](data);
				this._store[reducer.name] = reducer.getState();
			}
		})
		this.emit('reduce', this._store);
	}

}