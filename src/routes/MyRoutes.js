import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import VideoRoomPage from '../pages/VideoRoomPage'
import DashboardPage from '../pages/DashboardPage'

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/room" element={<VideoRoomPage />} />
      <Route exact path="/signup" element={<></>} />
      <Route exact path="/reset" element={<></>} />
      <Route exact path="/meet" element={<></>} />
      <Route exact path="/profile" element={<></>} />
      <Route exact path="/course" element={<></>} />
      <Route exact path="/" element={<DashboardPage></DashboardPage>} />
      <Route exact path="/settings" element={<></>} />
      <Route exact path="/assignments" element={<></>} />
      <Route exact path="/admin" element={<></>} />
    </Routes>
  )
}

export default MyRoutes;