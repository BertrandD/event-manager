import React, { Component, PropTypes } from 'react';
import Tournament from './Tournament'

class TournamentCreate extends Component {

    constructor(props, context) {
        super(props, context);

        if (this.props.tournament) {
            this.state = this.props.tournament
        } else {
            this.state = {
                name: '',
                description: '',
                rules: '',
                date: '',
                hour: '',
                fields: []
            }
        }
    }

    updateField({ index, value }) {
        this.setState({
            fields: this.state.fields.map((field, i) => {
                if (index === i) {
                    return {...field, label: value};
                }
                return field;
            })
        });
    }

    removeField(index) {
        this.setState({
            fields: this.state.fields.filter((field, i) => {
                return index !== i
            })
        });
    }

    addField() {
        this.setState({
            fields: [
                ...this.state.fields,
                {label:"", isRequired: true}
            ]
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <legend>
                        Edition
                        <button className="btn btn-success pull-right" onClick={this.props.onSubmit.bind(null, this.state)}>
                            Enregistrer
                        </button>
                    </legend>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="form-group">
                                <label className="control-label">Nom du tournois</label>
                                <input type="text" ref="name" placeholder="Nom du tournois" value={this.state.name} onChange={e => (this.setState({name: e.target.value}))} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Date</label>
                                <input type="text" ref="name" value={this.state.date} onChange={e => (this.setState({date: e.target.value}))} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Heure du début</label>
                                <input type="text" ref="name" value={this.state.hour} onChange={e => (this.setState({hour: e.target.value}))} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Description du tournois</label>
                                <textarea type="text" rows="5" ref="name" value={this.state.description} onChange={e => (this.setState({description: e.target.value}))} className="form-control">
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Règles du tournois</label>
                                <textarea type="text" rows="5" ref="name" value={this.state.rules} onChange={e => (this.setState({rules: e.target.value}))} className="form-control">
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label className="control-label">
                                    Champs du formulaire
                                </label>
                            </div>

                            { this.state.fields.map((field, index) => (
                                <div key={index} className="row">
                                    <div className="col-sm-10">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <input type="text"
                                                       id={"field-" + index}
                                                       placeholder="ex: Pseudo sur discord"
                                                       className="form-control"
                                                       onChange={e => this.updateField({ index: index, value: e.target.value })}
                                                       value={field.label}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <button type="button" className="btn btn-danger" onClick={this.removeField.bind(this, index)}>
                                            <i className="fa fa-times">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="row m-b">
                                <div className="col-sm-10">
                                    <button type="button" className="btn btn-sm btn-primary btn-addon" onClick={this.addField.bind(this)}>
                                        <i className="glyphicon glyphicon-plus">
                                        </i> Ajouter un champ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <legend>Preview</legend>
                    <div className="CentralBlock">
                        <Tournament tournament={this.state} displayRegisterForm={true}/>
                    </div>
                </div>
            </div>
        )
    }
}

TournamentCreate.propTypes = {
    tournament: PropTypes.object
};

export default TournamentCreate;
