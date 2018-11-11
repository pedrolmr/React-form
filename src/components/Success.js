import React, { Component } from 'react';

class Confirm extends Component {

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <React.Fragment>
                <h1>SUCCESS</h1>
                <p>You will receive an email shortly.</p>
            </React.Fragment>
        );
    }
}
export default Confirm;