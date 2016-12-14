import LoginReducer from './reducers/login';
import { Store } from '../../../src/index';

const reducer = new LoginReducer('login');

export default new Store(reducer);
