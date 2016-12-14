import Notifications from './components/Notifications';
import LoginForm from './components/LoginForm';
import AppStore from './store';
import ReactDOM from 'react-dom';
import React from 'react';

// App Component.
const App = React.createClass({

    getInitialState() {
        return AppStore.getState();
    },

    componentDidMount() {
        AppStore.subscribe(( _, store) => this.setState(store));
    },

    render() {
        return (
            <div>
                <Notifications />
                <div className="sign-in-header">
                    <h1>Reduxtion Login Example</h1>
                    <img className='logo' src="logo.svg"></img>
                </div>
                <div className="sign-in-container">
                    <div>
                        <LoginForm
                            password={this.state.login.password}
                            email={this.state.login.email} />
                    </div>
                </div>
            </div>
        );
    }

});

// App entry point.
window.addEventListener("load", function() {
    ReactDOM.render((
        <App />
    ), document.getElementById("app"));
});
