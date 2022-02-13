import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MyRoutes from "../routes/MyRoutes"
import ProfileDropDown from "../components/ProfileDropDown";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = (props) => {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const onHamburger = (value = !menu) => setMenu(value)
  const onProfile = (value = !profile) => setProfile(value)

  return (<BrowserRouter>
    <Navbar onHamburger={onHamburger} onProfile={onProfile} />
    <div className="h-14 w-screen" />
    <Sidebar onSideBar={onHamburger} visible={menu} />
    <ProfileDropDown setVisibility={setProfile} visible={profile} />
    <Routes>
      <Route path="/*" element={<MyRoutes />} />
    </Routes>
  </BrowserRouter>
  )
}

export default connect()(App);
