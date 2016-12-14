import { Reducer } from '../../../../src/index';

const INTIAL_STATE = {
    email: '',
    password: ''
};

export default class LoginReducer extends Reducer {

    constructor(name) {
        super(name, INTIAL_STATE);
    }

    updateEmailAddress(email) {
        this.setState({
            email: email
        });
    }

    updatePassword(password) {
        this.setState({
            password: password
        });
    }

}
