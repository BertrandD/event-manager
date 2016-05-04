import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TournamentCreate from './components/TournamentCreate'
import AppContentWrapper from '../core/components/AppContentWrapper';
import { updateTournament } from './actions/tournamentActions'
import { push } from 'react-router-redux'
import moment from 'moment'

class TournamentCreateContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            error:'',
            success: false
        }
    }

    handleSubmit(tournament) {
        this.props.actions.updateTournament(tournament)
            .then(res => {
                this.setState({
                    error: 'Saved at ' + moment(Date.now()).format('LTS')
                })
            })
            .catch(res => {
                this.setState({
                    error: 'An error occured !'
                })
            })
    }

    render() {
        return (
            <AppContentWrapper title={this.props.tournament.name}>
                {this.state.error}
                <TournamentCreate tournament={this.props.tournament} onSubmit={this.handleSubmit.bind(this)}/>
            </AppContentWrapper>
        );

    }
}

function mapStateToProps({ entities }, ownProps) {
    const { tournamentId } = ownProps.params;
    return { tournament: entities.tournaments[tournamentId], tournamentId };
}


function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({ updateTournament, push }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentCreateContainer);

