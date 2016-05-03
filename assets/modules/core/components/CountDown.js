import React, { Component, PropTypes } from 'react'

class CountDown extends Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            remaining: null
        }
    }

    tick() {
        let startDate = new Date();
        let endDate = new Date(this.props.endDate);
        let remaining = DateBetween(startDate, endDate);
        this.setState({remaining: remaining});
    }

    componentDidMount () {
        this.tick();
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render () {
        return (
            <span className="CountDown">
                <span className="date"> {this.state.remaining}</span>
                <span className="prefix"> {this.props.prefix}</span>
            </span>
        );
    }
}


function DateBetween(startDate, endDate) {
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let distance = endDate - startDate;

    if (distance < 0) {
        return "count down date expired";
    }

    let days = Math.floor(distance / day);
    let hours = Math.floor((distance % day) / hour);
    let minutes = Math.floor((distance % hour) / minute);
    let seconds = Math.floor((distance % minute) / second);

    var day_description;
    var hour_description;
    var min_description;
    var sec_description;

    if (days == 1) {
        day_description = ' day ';
    } else {
        day_description = ' days ';
    }

    if (hours == 1) {
        hour_description = ' hour ';
    } else {
        hour_description = ' hours ';
    }

    if (minutes == 1) {
        min_description = ' minute ';
    } else {
        min_description = ' minutes ';
    }

    if (seconds == 1) {
        sec_description = ' second';
    } else {
        sec_description = ' seconds';
    }

    let between = days + day_description;
    between += hours + hour_description;
    between += minutes + min_description;
    between += seconds + sec_description;

    return between;
}
CountDown.PropTypes = {
    endDate: PropTypes.string.isRequired,
    prefix: PropTypes.string
}

export default CountDown;