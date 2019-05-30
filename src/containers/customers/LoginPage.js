import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import LoginPageComponent from '../../components/customers/LoginPage';
import { signIn } from '../../store/actions/Customers';

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        const { signIn } = this.props;
        const { email, password } = this.state;
        const userData = { email, password };
        signIn(userData);
    }
    render() {
        return (
            <Fragment>
                <LoginPageComponent 
                    state={this.state}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}/>
            </Fragment>
        )
    }
}
export default connect(null, { signIn })(LoginPage);
