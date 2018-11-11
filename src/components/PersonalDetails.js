import React, { Component } from 'react';

class PersonalDetails extends Component {

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, changeHandler } = this.props;
        return (
            <React.Fragment>
                <form>
                    <input
                        name="occupation"
                        value={values.occupation}
                        placeholder="Enter Occupation Here"
                        onChange={changeHandler}
                    />
                    <input
                        name="city"
                        value={values.city}
                        placeholder="Enter City Here"
                        onChange={changeHandler}
                    />
                    <input
                        name="bio"
                        value={values.bio}
                        placeholder="Enter Bio Here"
                        onChange={changeHandler}
                    />
                    <button onClick={this.continue}>Continue</button>
                    <button onClick={this.back}>Back</button>
                </form>
            </React.Fragment>
        );
    }
}
export default PersonalDetails;