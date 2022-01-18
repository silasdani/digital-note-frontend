import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MyRoutes from "../routes/MyRoutes"

const App = ({ location }) => {
  const [visible, setVisibility] = useState(false);
  const onHamburger = () => setVisibility(!visible)

  return (<>
    <Navbar onHamburger={onHamburger} />
    {visible && <Sidebar onHamburger={onHamburger} />}
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
