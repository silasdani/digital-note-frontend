

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";

const TeacherRoute = ({ authenticated, component: Component, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        {...rest}
        key={Math.random()}
        element={
          authenticated
            ?
            <Component navigate={navigate} />
            :
            <Navigate to={authenticated ? "/dashboard" : "/home"} />
        }
      />
    </Routes>
  )
};

TeacherRoute.propTypes = {
  component: PropTypes.any.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { authenticated } = state.session.session;
  return {
    authenticated,
  }
}

export default connect(mapStateToProps)(TeacherRoute);