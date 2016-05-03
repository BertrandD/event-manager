import React, { Component, PropTypes } from 'react';
import CountDown from '../../core/components/CountDown'

class Tournament extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <p>This tournament start at : {this.props.tournament.start_date}</p>
                <p>This tournament will end at : {this.props.tournament.end_date}</p>
                <p>
                    Remaining : <CountDown endDate={this.props.tournament.start_date} />
                </p>
            </div>
        )
    }
}

Tournament.propTypes = {
    tournament: PropTypes.object.isRequired
};

export default Tournament;
