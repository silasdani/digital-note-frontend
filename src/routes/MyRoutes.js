import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import VideoRoomPage from '../pages/VideoRoomPage'
import DashboardPage from '../pages/DashboardPage'
import MyCoursesPage from '../pages/MyCoursesPage'
import HomePage from '../pages/HomePage'
import { connect } from 'react-redux';

const AuthenticatedRoutes = (h) => {
  return (<>
    <Route exact path="/profile" element={<></>} />
    <Route exact path="/courses" element={<MyCoursesPage></MyCoursesPage>} />
    <Route exact path="/" element={<DashboardPage></DashboardPage>} />
    <Route exact path="/room" element={<VideoRoomPage />} />
    <Route exact path="/meet" element={<></>} />
    <Route exact path="/settings" element={<></>} />
    <Route exact path="/assignments" element={<></>} />
    <Route exact path="/admin" element={<></>} />
  </>)
}

const GuestRoutes = (h) => {
  return (<>
    <Route exact path="/login" element={<LoginPage history={h} />} />
    <Route exact path="/signup" element={<></>} />
    <Route exact path="/reset" element={<></>} />
    <Route exact path="/" element={<HomePage />} />
  </>)
}

const MyRoutes = ({ isAuth, history }) => {
  return (
    <Routes>
      {/* {isAuth ? AuthenticatedRoutes(history) : GuestRoutes(history)} */}

      <Route exact path="/login" element={<LoginPage history={history} />} />
      <Route exact path="/signup" element={<></>} />
      <Route exact path="/reset" element={<></>} />
      {/* <Route exact path="/" element={<HomePage />} /> */}
      <Route exact path="/courses" element={<MyCoursesPage></MyCoursesPage>} />
      <Route exact path="/" element={<DashboardPage></DashboardPage>} />
      <Route exact path="/room" element={<VideoRoomPage />} />
      <Route path="*"
        element={
          <main className="p-20">
            <p>There's nothing here! 404</p>
          </main>
        }
      />
    </Routes>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.session.signedIn,
  }
}

export default connect(mapStateToProps)(MyRoutes);