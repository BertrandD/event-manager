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
                        <th>Name</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Status</th>
                        <th>Remaining before start</th>
                    </tr>
                    </thead>
                    <tbody>
                    {map(this.props.tournaments, (tournament, id) => (
                        <tr key={id} className="cursor-pointer" onClick={browserHistory.push.bind(null, `/tournament/${id}`)}>
                            <td>
                                {tournament.name}
                            </td>
                            <td>
                                {tournament.start_date}
                            </td>
                            <td>
                                {tournament.end_date}
                            </td>
                            <td>
                                {tournament.status}
                            </td>
                            <td>
                                <CountDown endDate={tournament.start_date} />
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
