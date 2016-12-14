import { updateEmailAddress, updatePassword } from '../actions/login';
import React from 'react';


const LoginForm = React.createClass({

    onEmailChange(e) {
        updateEmailAddress(e.target.value);
    },

    onPasswordChange(e) {
        updatePassword(e.target.value);
    },

    render() {
        return (
            <div>
                <form>
                    <input
                        value={this.props.email}
                        placeholder="Email Address"
                        onChange={this.onEmailChange}>
                    </input>
                    <input
                        value={this.props.password}
                        placeholder="Password" type="password"
                        onChange={this.onPasswordChange}>
                    </input>
                    <div className="btn btn-primary">Sign In</div>
                </form>
            </div>
        );
    }

});

export default LoginForm;

