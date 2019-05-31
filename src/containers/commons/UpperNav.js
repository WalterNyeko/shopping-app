import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UpperNavComponent from '../../components/commons/UpperNav';
import { getDepartments } from '../../store/actions/Departments';

class UpperNav extends Component {
    state = {
        isLoggedIn: false,
    }

    componentWillMount(){
        const jwtToken = localStorage.getItem("jwt-token");
        const { getDepartments } = this.props;
        jwtToken && this.setState({isLoggedIn: true});
        getDepartments();
    }
    render() {
        const { isLoggedIn } = this.state;
        const { allDepartments } = this.props;
        return (
            <Fragment>
                <UpperNavComponent 
                    isLoggedIn={isLoggedIn}
                    allDepartments={allDepartments}/>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    allDepartments: state.departments
})
export default connect(mapStateToProps, { getDepartments })(UpperNav);
