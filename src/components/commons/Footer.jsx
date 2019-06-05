import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({ departments }) => {
  return (
    <footer className="footer bg-dark sticky-bottom mb-auto py-3">
      <div className="container text-center h5 mt-4">
        {departments &&
          departments.length &&
          departments.map(({ name, department_id }) => (
            <NavLink
              to={`/department/${department_id}`}
              key={department_id}
              className="text-white mr-5"
            >
              {name}
            </NavLink>
          ))}
      </div>

      <div className="container text-center mt-4 mb-4">
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          <i className="fab fa-instagram fa-3x" />
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          <i className="fab fa-pinterest fa-3x" />
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          <i className="fab fa-twitter fa-3x" />
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          <i className="fab fa-facebook fa-3x" />
        </a>
      </div>

      <div className="container text-center mt-4 mb-4">
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          &copy; 2019 Shopmate Ltd
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          Contact
        </a>
        <a className="text-white ml-5 mr-5 mb-4" href="#">
          Privacy policy
        </a>
      </div>
    </footer>
  );
};
export default Footer;
