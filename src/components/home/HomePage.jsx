import React, { Fragment } from "react";
import UpperNav from "../../containers/commons/UpperNav";
import SideNav from "../../containers/commons/SideNav";
import Footer from "../../containers/commons/Footer";

const HomePage = props => {
  const { content, departmentId, departments } = props;
  return (
    <Fragment>
      <UpperNav />
      <div className="mycontent">
        <SideNav content={content} departmentId={departmentId} />
      </div>
      <Footer departments={departments} />
    </Fragment>
  );
};
export default HomePage;
