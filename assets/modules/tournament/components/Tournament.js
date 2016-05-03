import React, { Component, PropTypes } from 'react';

class Tournament extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                Hello from Tournament component
            </div>
        )
    }
}

Tournament.propTypes = {

};

export default Tournament;
