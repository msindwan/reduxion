import { Action } from '../../../../src/index';

const updateEmailAddress = Action('updateEmailAddress', email => {
    return email;
});

const updatePassword = Action('updatePassword', password => {
    return password;
});

export {
    updateEmailAddress,
    updatePassword
};