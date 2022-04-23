

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";

const TeacherRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        {...rest}
        key={Math.random()}
        element={
          isAuthenticated || true
            ?
            <Component navigate={navigate} />
            :
            <Navigate to={isAuthenticated ? "/dashboard" : "/home"} />
        }
      />
    </Routes>
  )
};

TeacherRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.session.signedIn,
  };
}

export default connect(mapStateToProps)(TeacherRoute);