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
        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <React.Fragment>
                <h3>First Name:</h3>
                <p>{firstName}</p>

                <h3>Last Name:</h3>
                <p>{lastName}</p>

                <h3>Email:</h3>
                <p>{email}</p>

                <h3>Occupation:</h3>
                <p>{occupation}</p>

                <h3>City:</h3>
                <p>{city}</p>

                <h3>Bio:</h3>
                <p>{bio}</p>

                <button onClick={this.continue}>Continue</button>
                <button onClick={this.back}>Back</button>
            </React.Fragment>
        );
    }
}
export default Confirm;