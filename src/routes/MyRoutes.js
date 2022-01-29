import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import VideoRoomPage from '../pages/VideoRoomPage'
import DashboardPage from '../pages/DashboardPage'
import MyCoursesPage from '../pages/MyCoursesPage'
import { connect } from 'react-redux';

const AuthenticatedRoutes = () => {
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

const GuestRoutes = () => {
  return (<>
    <Route exact path="/login" element={<LoginPage />} />
    <Route exact path="/signup" element={<></>} />
    <Route exact path="/reset" element={<></>} />
    <Route exact path="/" />
  </>)
}

const MyRoutes = ({ isAuth }) => {
  console.warn(isAuth);
  return (
    <Routes>
      {isAuth ? AuthenticatedRoutes() : GuestRoutes()}
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