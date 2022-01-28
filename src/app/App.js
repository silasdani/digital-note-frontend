import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MyRoutes from "../routes/MyRoutes"
import ProfileDropDown from "../components/ProfileDropDown";

const App = ({ location }) => {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const onHamburger = (value = !menu) => setMenu(value)
  const onProfile = (value = !profile) => setProfile(value)

  return (<>
    <Navbar onHamburger={onHamburger} onProfile={onProfile} />
    <div className="h-14 w-screen" />
    <Sidebar onSideBar={onHamburger} visible={menu} />
    <ProfileDropDown setVisibility={setProfile} visible={profile} />
    <MyRoutes />
  </>
  )
}

export default connect()(App);
