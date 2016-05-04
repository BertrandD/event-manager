import React, { Component, PropTypes } from 'react';
import map from 'lodash/map'
import { browserHistory } from 'react-router'
import CountDown from '../../core/components/CountDown'

class TournamentList extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="panel panel-default">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {map(this.props.tournaments, (tournament, id) => (
                        <tr key={id}>
                            <td>
                                {tournament.name}
                            </td>
                            <td>
                                {tournament.date}
                            </td>
                            <td>
                                {tournament.hour}
                            </td>
                            <td>
                                <a href={"/tournament/"+tournament._id} target="_blank" className="btn btn-default">
                                    Open
                                </a>
                                <button onClick={browserHistory.push.bind(null, `/edit/tournament/${id}`)} className="btn btn-default">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

TournamentList.propTypes = {
    tournaments: PropTypes.object.isRequired
};

export default TournamentList;
