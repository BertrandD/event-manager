import React, { Component, PropTypes } from 'react';
import CountDown from '../../core/components/CountDown'
import forEach from 'lodash/forEach'
import './Tournament.scss'

class TournamentRegisterForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            errors: {}
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

    handleChange(ref, isRequired) {
        if (isRequired) {
            if (!this.refs[ref].value || this.refs[ref].value.length < 1) {
                this.setState({
                    errors: Object.assign({}, this.state.errors, {
                        [ref]: 'error'
                    })
                })
            } else {
                this.setState({
                    errors: Object.assign({}, this.state.errors, {
                        [ref]: 'good'
                    })
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
                    {this.props.fields.map((field, index) => (
                        <div key={index} className={this.getClassName(index)}>
                            <label className="control-label" >{field.label}</label>
                            <input type="text" ref={index} placeholder={field.label} onChange={this.handleChange.bind(this, index, field.isRequired)} className="form-control"/>
                            {this.state.errors[index] === "error" && (
                                <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"> </span>
                            ) || this.state.errors[index] === "good" && (
                                <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"> </span>
                            )}
                        </div>
                    ))}


                    <button type="submit" className="btn btn-success" disabled={this.hasError()}>Valider mon inscription</button>
                    <button type="button" className="btn btn-default" onClick={this.props.onCancel}>Annuler</button>
                </form>
            </div>
        )
    }
}

TournamentRegisterForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired
};

export default TournamentRegisterForm;
