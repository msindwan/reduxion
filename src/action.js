import GlobalDispatcher from './dispatcher';

export default function(action, func) {
	return function(...args) {
		const state = func.apply(this, args);
		GlobalDispatcher.emit(action, state);
	};
}
