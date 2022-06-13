import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import { STORAGE_KEY } from '../redux/ducks/sessionDuck';

const TeacherRoute = ({ authenticated, component: Component, ...props }) => {
  const navigate = useNavigate();

  const logic = () => {
    if (authenticated) return <Component navigate={navigate} />

    return <Navigate to="/" />
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

TeacherRoute.propTypes = {
  component: PropTypes.any.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const authenticated = !!window.localStorage.getItem(STORAGE_KEY)
    || !!window.sessionStorage.getItem(STORAGE_KEY);

  return {
    authenticated,
  }
}

export default connect(mapStateToProps)(TeacherRoute);