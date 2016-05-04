import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tournament from './components/Tournament'
import AppContentWrapper from '../core/components/AppContentWrapper';
import './TournamentLandingPage.scss'

class TournamentLandingPage extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="CentralBlock">
                    <Tournament tournament={this.props.tournament} />
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TournamentLandingPage);

