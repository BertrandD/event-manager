import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TournamentList from './components/TournamentList'
import AppContentWrapper from '../core/components/AppContentWrapper';

class TournamentListContainer extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <AppContentWrapper title={"Tournaments"} subtitle="Welcome !">
                <TournamentList tournaments={this.props.tournaments} />
            </AppContentWrapper>
        );

    }
}

function mapStateToProps({ entities }) {
    return { tournaments: entities.tournaments };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentListContainer);

