import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import VideoRoomPage from '../pages/VideoRoomPage'

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/room" element={<VideoRoomPage />} />
        </Routes>
    )
}

export default MyRoutes;