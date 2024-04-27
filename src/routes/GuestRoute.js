

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";

const GuestRoute = ({ authenticated, component: Component, ...props }) => {
  const navigate = useNavigate();

  const logic = () => {
    if (authenticated) return <Navigate to="/dashboard" />

    return <Component navigate={navigate} />
  }

  return (
    <Routes>
      <Route
        {...props}
        key={Math.random()}
        element={logic()}
      />
    </Routes>
  )
};

GuestRoute.propTypes = {
  component: PropTypes.any.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { authenticated } = state.session.session;
  const exam = state.exam.examen;

  return {
    authenticated,
    exam
  }
}

export default connect(mapStateToProps)(GuestRoute);