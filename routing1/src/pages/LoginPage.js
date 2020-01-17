import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'login'
        };
    }

    renderLoginForm() {
        return (
            <div>
                <h1>LOGIN FORM</h1>
                <button onClick={ () => this.setState({ mode: 'forgot' }) }>Forgot Password?</button>
            </div>
        );
    }

    renderForgotPasswordForm() {
        return (
            <div>
                <h1>FORGOT PASSWORD FORM</h1>
                <button onClick={ () => this.setState({ mode: 'login' }) }>Already have account? Login</button>
            </div>
        );
    }

    render() {
        let formToRender;

        if(this.state.mode === 'login') {
            formToRender = this.renderLoginForm();
        }
        else {
            formToRender = this.renderForgotPasswordForm();
        }

        return (
            <div className="login-page-container">
                { formToRender }
                {/* { this.state.mode === 'login' ? this.renderLoginForm() : this.renderForgotPasswordForm() } */}
            </div>
        );
    }
}

export default LoginPage;