import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import VideoRoomPage from '../pages/VideoRoomPage'
import DashboardPage from '../pages/DashboardPage'
import MyCoursesPage from '../pages/MyCoursesPage'
import HomePage from '../pages/HomePage'
import GuestRoute from '../routes/GuestRoute'
import UserRoute from '../routes/UserRoute'
import { connect } from 'react-redux';

const MyRoutes = ({ isAuth }) => {
  return (
    <React.Fragment>
      <UserRoute
        path="/dashboard"
        component={DashboardPage}
      />
      <UserRoute
        path="/courses"
        component={MyCoursesPage}
      />
      <GuestRoute
        path="/room"
        component={VideoRoomPage}
      />
      <Routes>
        <Route
          path="/home"
          element={<HomePage />}
        />
      </Routes>
      {/* <Route
        path={"/confirmation/:token/:action"}
        component={ConfirmationPage}
      /> */}
      <GuestRoute
        path="/login"
        component={LoginPage}
      />
      {/* <GuestRoute
        path="/signup"
        component={SignupPage}
      /> */}
      {/* <GuestRoute
        path="/forgot_password"
        component={ForgotPasswordPage}
      /> */}
      {/* <GuestRoute
        path="/reset_password/:token"
        component={ResetPasswordPage}
      /> */}
      {/* <UserRoute
        path="/users"
        component={UsersPage}
      /> */}
      {/* <UserRoute
        path="/users/edit/:id"
        component={EditUserPage}
      /> */}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.session.signedIn,
  }
}

export default connect(mapStateToProps)(MyRoutes);