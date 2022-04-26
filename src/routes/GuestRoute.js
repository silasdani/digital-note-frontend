

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        {...rest}
        key={Math.random()}
        element={
          !isAuthenticated
            ?
            <Component navigate={navigate} />
            :
            <Navigate to={isAuthenticated ? "/dashboard" : "/home"} />
        }
      />
    </Routes>
  )
};

GuestRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.session.session.authenticated,
  };
}

export default connect(mapStateToProps)(GuestRoute);