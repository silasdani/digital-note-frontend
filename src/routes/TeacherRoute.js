import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Navigate, Routes, useNavigate } from 'react-router-dom';

const TeacherRoute = ({ authenticated, component: Component, ...props }) => {
  const navigate = useNavigate();

  const logic = () => {
    if (authenticated) return <Component navigate={navigate} />;

    return <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route {...props} key={Math.random()} element={logic()} />
    </Routes>
  );
};

TeacherRoute.propTypes = {
  component: PropTypes.any.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.session.session.authenticated,
});

export default connect(mapStateToProps)(TeacherRoute);
