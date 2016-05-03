import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tournament from './components/Tournament'
import AppContentWrapper from '../core/components/AppContentWrapper';

class TournamentListContainer extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (!this.props.tournament) {
            return (
                <AppContentWrapper title={"Loading tournament..."} subtitle="Please wait !">
                    Loading...
                </AppContentWrapper>
            );
        }
        return (
            <AppContentWrapper title={"Tournament: "+this.props.tournament.name} subtitle="Welcome !">
                <Tournament tournament={this.props.tournament} />
            </AppContentWrapper>
        );

    }
}

function mapStateToProps({ entities }, ownProps) {
    const { tournamentId } = ownProps.params;
    return { tournament: entities.tournaments[tournamentId], tournamentId };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentListContainer);

