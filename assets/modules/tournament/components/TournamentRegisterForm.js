import React, { Component, PropTypes } from 'react';
import CountDown from '../../core/components/CountDown'
import forEach from 'lodash/forEach'
import './Tournament.scss'
import '../TournamentLandingPage.scss'

class TournamentRegisterForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            errors: {
                pseudo: 'initial'
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const pseudo = this.refs.pseudo.value;

        if (!pseudo || pseudo.length < 1) {
            this.setState({
                errors: {
                    pseudo: 'error'
                }
            });
            return;
        }

        this.props.onSubmit({
            pseudo
        });
    }

    handleChange(ref) {
        if (ref === 'pseudo') {
            if (!this.refs[ref].value || this.refs[ref].value.length < 1) {
                this.setState({
                    errors: {
                        pseudo: ref === 'pseudo' ? 'error' : this.state.errors.pseudo
                    }
                })
            } else {
                this.setState({
                    errors: {
                        pseudo: 'good'
                    }
                })
            }
        }
    }

    getClassName(ref) {
        let className = "form-group";
        if (this.state.errors[ref] === "error") {
            className += " has-feedback has-error"
        } else if (this.state.errors[ref] === "good") {
            className += " has-feedback has-success"
        }
        return className;
    }

    hasError() {
        let error = false;
        forEach(this.state.errors, (err) => {
            error = error || err !== 'good';
        });
        return error;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className={this.getClassName('pseudo')}>
                        <label className="control-label" >Pseudo sur Discord</label>
                        <input type="text" ref="pseudo" placeholder="Ton pseudo" onChange={this.handleChange.bind(this, 'pseudo')} className="form-control"/>
                        {this.state.errors.pseudo === "error" && (
                            <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"> </span>
                        ) || this.state.errors.pseudo === "good" && (
                            <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"> </span>
                        )}
                    </div>

                    <button type="submit" className="btn btn-success" disabled={this.hasError()}>Valider mon inscription</button>
                    <button type="button" className="btn btn-default" onClick={this.props.onCancel}>Annuler</button>
                </form>
            </div>
        )
    }
}

TournamentRegisterForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default TournamentRegisterForm;
