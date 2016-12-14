class Dispatcher {

	constructor() {
		this._listeners = [];
	}

	subscribe(listener) {
		this._listeners.push(listener);
	}

	unsubscribe(listener) {
		const index = this._listeners.index(listener);
		if (index > -1) {
			this._listeners.splice(1, index);
		}
	}

	emit(type, data) {
		this._listeners.forEach(listener => {
			listener(type, data);
		});
	}

}

export default new Dispatcher();
export { Dispatcher }
