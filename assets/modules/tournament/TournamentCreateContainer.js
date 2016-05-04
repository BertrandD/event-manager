import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TournamentCreate from './components/TournamentCreate'
import AppContentWrapper from '../core/components/AppContentWrapper';
import { createTournament } from './actions/tournamentActions'
import { push } from 'react-router-redux'

class TournamentCreateContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            error:'',
            success: false
        }
    }

    handleSubmit(tournament) {
        this.props.actions.createTournament(tournament)
            .then(res => {
                this.props.actions.push('/edit/tournament/'+res._id)
            })
            .catch(res => {
                this.setState({
                    error: 'An error occured !'
                })
            })
    }

    render() {
        return (
            <AppContentWrapper title={"Create new tournament"} subtitle="Hourrey !">
                {this.state.error}
                <TournamentCreate onSubmit={this.handleSubmit.bind(this)}/>
            </AppContentWrapper>
        );

    }
}

function mapStateToProps({ }) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({ createTournament, push }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentCreateContainer);

