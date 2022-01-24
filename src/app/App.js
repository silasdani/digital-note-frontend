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
  const onHamburger = () => setMenu(!menu)
  const onProfile = () => setProfile(!profile)

  return (<>
    <Navbar onHamburger={onHamburger} onProfile={onProfile} />
    <div className="h-14 w-screen" />
    <Sidebar onHamburger={onHamburger} visible={menu} />
    <ProfileDropDown visible={profile} />
    <MyRoutes />
  </>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired
};


export default connect()(App);
