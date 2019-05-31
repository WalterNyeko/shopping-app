import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SideNavComponent from '../../components/commons/SideNav';
import { getCategories, getDepartmentCategories } from '../../store/actions/Categories';

class SideNav extends Component {
    componentWillMount = () => {
        if(this.props.departmentId){
            const { getDepartmentCategories, departmentId } = this.props;
            getDepartmentCategories(departmentId);
        }else{
            const { getCategories } = this.props;
            getCategories();
        }   
    }

    componentWillReceiveProps = (nextProps) => {
        if(this.props.departmentId !== nextProps.departmentId){
            if( nextProps.departmentId){
                const { getDepartmentCategories, departmentId } = nextProps;
                getDepartmentCategories(departmentId);
            }else{
                const { getCategories } = nextProps;
                getCategories();
            }   
        }
        
    }
    render() {
        let categoriesData;
        if(this.props.departmentId){
            const { allCategories: { categoriesPerDepartment } } = this.props;
            categoriesData = categoriesPerDepartment;
        }else{
            const { allCategories: { categories: { rows } } } = this.props;
            categoriesData = rows;
        }
        const { content } = this.props;
        return (
            <Fragment>
                <SideNavComponent 
                    content={content}
                    allCategories={categoriesData}/>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    allCategories: state.categories
})
export default connect(mapStateToProps, { getCategories, getDepartmentCategories })(SideNav);
