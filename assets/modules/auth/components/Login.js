import React, { Component, PropTypes } from 'react';

class Login extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            error: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const username = this.refs.username.value;
        const password = this.refs.password.value;

        this.props.onSubmit({username, password});
    }

    handleRegister(e) {
        e.preventDefault();

        const username = this.refs.username.value;
        const password = this.refs.password.value;

        this.props.onRegister({username, password});
    }

    render() {
        return (
          <form className="form-validation" onSubmit={this.handleSubmit.bind(this)}>

            { this.state.error && this.renderMessage() }

            <div className="list-group list-group-sm">
              <div className="list-group-item">
                <input type="email" ref="email" name="email" placeholder="Email"
                       className="form-control no-border ng-valid-email ng-touched ng-dirty ng-valid ng-valid-required"
                       ng-model="user.email" autofocus="true" required=""/>
              </div>

              <div className="list-group-item">
                <input type="password" ref="pass" name="password" placeholder="Password"
                       className="form-control no-border ng-untouched ng-dirty ng-valid-parse ng-valid ng-valid-required"
                       ng-model="user.password" required=""/>
              </div>
            </div>

            <button type="submit" className="btn btn-lg btn-success btn-block">
              <span>Log in</span>
            </button>
          </form>
        )
    }
}

Login.propTypes = {
    onSubmit: PropTypes.func.isRequired/*,
    onRegister: PropTypes.func.isRequired*/
};

export default Login;
