import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './components/Login';
import * as actions from './actions/loginActions';

class LoginContainer extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <div className="container w-xxl w-auto-xs">
            <div className="navbar-brand block m-t">Tounrament manager</div>
            <div className="m-b-lg">
              <div className="wrapper text-center">
                <strong>Sign in to continue</strong>
              </div>

              <Login onSubmit={this.props.actions.fetchLogin}/>
            </div>
          </div>
        );
    }
}

function mapStateToProps({ user }) {
    return {user};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

LoginContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

