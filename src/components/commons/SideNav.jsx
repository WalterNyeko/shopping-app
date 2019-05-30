import React, { Fragment } from 'react';
import '../../styles/SideNav.css';

 const SideNav = (props) => {
     const { content } = props;
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-2">
                    <div className="sidenav">
                        <h6>Categories</h6>
                        <hr></hr>
                        <a href="#">Christmas</a>
                        <a href="#">Valentines</a>
                        <a href="#">Ladies</a>
                        <a href="#">Children</a>
                    </div>
                </div>
                <div className="col-md-10">
                    {content}
                </div>

            </div>
        </Fragment>
    )
}
export default SideNav;
