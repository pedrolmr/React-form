import React, { Component } from 'react';
import './App.css';
import UserDetails from './components/UserDetails';

class UserForm extends Component {
constructor() {
    super();
    this.state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
}

nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    })
}


prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    })
}

changeHandler = () => {
    this.setState({ [event.target.name]: event.target.value });
}

render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
        case 1:
            return (
                <UserDetails
                    nextStep={this.nextStep}
                    changeHandler={this.changeHandler}
                    values={values}
                />
            )
        case 2:
            return (
                <h1>form personal details</h1>
            )
        case 3:
            return (
                <h1>confirm</h1>
            )
        case 4:
            return (
                <h1>Success</h1>
            )
        }
    }
}

export default UserForm;
