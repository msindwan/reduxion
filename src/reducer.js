export default class Reducer {

	constructor(name, initialState) {
		if (new.target === Abstract) {
	    	throw new TypeError("Cannot construct Abstract Reducer");
	    }
	    this.name = name;
	    this.state = Object.assign({}, initialState);
	}

	setState(newState) {
		this.state = Object.assign({}, this.state, newState);
	}

	getState() {
		return this.state;
	}

}
