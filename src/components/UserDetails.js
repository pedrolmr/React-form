import React, { Component } from 'react';

class UserDetails extends Component {

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { values, changeHandler } = this.props;
        return(
            <React.Fragment>
                <form>
                    <input
                        name="firstName"
                        value={values.firstName}
                        placeholder="Enter Name Here"
                        onChange={changeHandler}
                    />
                    <input
                        name="lastName"
                        value={values.lastName}
                        placeholder="Enter Last Name Here"
                        onChange={changeHandler}
                    />
                    <input
                        name="email"
                        value={values.email}
                        placeholder="Enter Email Here"
                        onChange={changeHandler}
                    />
                    <button onClick={this.continue}>Continue</button>
                </form>
            </React.Fragment>
        );
    }
}
export default UserDetails;