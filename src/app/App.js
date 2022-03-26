import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MyRoutes from "../routes/MyRoutes"
import ProfileDropDown from "../components/ProfileDropDown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../pages/Footer";


const App = (props) => {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const onHamburger = (value = !menu) => setMenu(value)
  const onProfile = (value = !profile) => setProfile(value)

  return (<BrowserRouter>
    <Navbar onHamburger={onHamburger} onProfile={onProfile} />
    <Sidebar onSideBar={onHamburger} visible={menu} />
    <ProfileDropDown setVisibility={setProfile} visible={profile} />
    <div className="m-16" >
    <Routes>
      <Route path="/*" element={<MyRoutes />} />
    </Routes>
    </div>
    <Footer></Footer>
  </BrowserRouter>
  )
}

export default connect()(App);
