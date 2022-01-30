import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MyRoutes from "../routes/MyRoutes"
import ProfileDropDown from "../components/ProfileDropDown";
import { useHistory } from "react-router";

const App = (props) => {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const onHamburger = (value = !menu) => setMenu(value)
  const onProfile = (value = !profile) => setProfile(value)
  const history = useHistory

  return (<>
    <Navbar onHamburger={onHamburger} onProfile={onProfile} history={history} />
    <div className="h-14 w-screen" />
    <Sidebar onSideBar={onHamburger} visible={menu} history={history} />
    <ProfileDropDown setVisibility={setProfile} visible={profile} history={history} />
    <MyRoutes history={history} />
  </>
  )
}

export default connect()(App);
