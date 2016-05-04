import React, { Component, PropTypes } from 'react';
import CountDown from '../../core/components/CountDown'
import TournamentRegisterForm from './TournamentRegisterForm'
import './Tournament.scss'
import '../TournamentLandingPage.scss'

class Tournament extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            displayRegisterForm: false,
            registerForm: {}
        }

    }

    displayRegisterForm() {
        this.setState({
            displayRegisterForm: true
        });
    }

    handleRegisterFormSubmit(data) {
        console.log(data);
    }

    handleRegisterFormCancel() {
        this.setState({
            displayRegisterForm: false
        });
    }

    render() {
        const { tournament } = this.props;
        return (
            <div className="Tournament">
                <div className="TournamentName">
                    {tournament.name}
                </div>
                <div className="TournamentDate">
                    <p>Vendredi 6 mai 2016</p>
                    <p>19h</p>
                </div>
                <div className="BlockTitle">
                    <i className="fa fa-globe">
                    </i>
                    Description du tournois
                </div>
                <div className="BlockContent" dangerouslySetInnerHTML={{__html:tournament.description}}>
                </div>
                <div className="BlockTitle">
                    <i className="fa fa-gavel">
                    </i>
                    Règles du tournois
                </div>
                <div className="BlockContent" dangerouslySetInnerHTML={{__html:tournament.rules}}>
                </div>
                <div className="TournamentRegister">
                    <button className="btn btn-primary" onClick={this.displayRegisterForm.bind(this)}>M'inscrire au tournois</button>
                </div>
                {this.state.displayRegisterForm && (
                    <TournamentRegisterForm onCancel={this.handleRegisterFormCancel.bind(this)}
                                            onSubmit={this.handleRegisterFormSubmit.bind(this)}/>
                )}
            </div>
        )
    }
}

Tournament.propTypes = {
    tournament: PropTypes.object.isRequired
};

export default Tournament;
