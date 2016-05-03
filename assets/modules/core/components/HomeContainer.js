import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppContentWrapper from './AppContentWrapper';
import { push } from 'react-router-redux'
import Home from './Home'

class HomeContainer extends React.Component {
  constructor (props, ctx) {
    super(props, ctx);
  }

  render () {
    return (
      <AppContentWrapper title={"Home"} subtitle="Welcome !">
        <Home />
      </AppContentWrapper>
    );
  }
}

HomeContainer.propTypes = {
};

function mapStateToProps () {
  return { };
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators({}, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
