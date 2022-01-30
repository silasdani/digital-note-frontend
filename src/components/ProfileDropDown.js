import React from 'react';
import { Link } from 'react-router-dom'
import { ImCommand } from 'react-icons/im';
import { connect } from 'react-redux';
import { logout } from '../redux/ducks/sessionDuck';
import { IoIosLogOut } from 'react-icons/io'

const ProfileDropDown = ({ visible, setVisibility, logout, user }) => {
  return <div className={`profile ${visible ? "translate-y-0" : "translate-y-full"} ease-in-out duration-150`}>
    <div className="nav-option mt-6">{user.email}</div>
    <Link to="/profile" onClick={() => setVisibility()} className="nav-option mt-6"><ImCommand className="mx-6" />PROFILE</Link>
    <Link to="/login" onClick={() => setVisibility()} className="nav-option"><ImCommand className="mx-6" />SIGN IN</Link>
    <Link to="/settings" onClick={() => setVisibility()} className="nav-option"><ImCommand className="mx-6" />SETTINGS</Link>
    <Link to="/about" onClick={() => setVisibility()} className="nav-option"><ImCommand className="mx-6" />ABOUT US</Link>
    <Link to="/reports" onClick={() => setVisibility()} className="nav-option"><ImCommand className="mx-6" />REPORTS</Link>
    <button onClick={() => { logout(); setVisibility() }} className="nav-option"><IoIosLogOut className="mx-6" />LOGOUT</button>
  </div>
};

const mapStateToProps = (state) => {
  const { user } = state.session;
  return {
    user
  }
}

export default connect(mapStateToProps, { logout })(ProfileDropDown);
