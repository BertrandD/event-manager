import React, { Component, PropTypes } from 'react';
import map from 'lodash/map'

class TournamentList extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {map(this.props.tournaments, (tournament, id) => (
                        <tr key={id}>
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
