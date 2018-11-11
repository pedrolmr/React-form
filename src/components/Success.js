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
            <div className="success-page">
                <h1>SUCCESS</h1>
                <p>You will receive an email shortly.</p>
            </div>
        );
    }
}
export default Confirm;