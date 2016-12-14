import GlobalDispatcher from './dispatcher';

export default (action, func) => {
	return (...args) {
		const state = func.apply(this, args);
		GlobalDispatcher.emit(action, state);
	};
}
