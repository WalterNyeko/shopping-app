import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import SignupPageComponent from '../../components/customers/SignupPage';
import { signupUser } from '../../store/actions/Customers';

class SignupPage extends Component {
    state = {
        username: '',
        email: '',
        password: '',
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;
        const userData = { name: username, email, password };
        const { signupUser } =this.props;
        signupUser(userData);
    }
    render() {
        return (
            <Fragment>
                <SignupPageComponent 
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                    state={this.state}
                />
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({ 
    username: state.username,
    email: state.email,
    password: state.password
})
export default connect(mapStateToProps, { signupUser })(SignupPage);