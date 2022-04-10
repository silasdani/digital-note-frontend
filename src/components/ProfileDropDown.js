import React from 'react';
import { Link } from 'react-router-dom'
import { ImCommand } from 'react-icons/im';
import { connect } from 'react-redux';
import { logout } from '../redux/ducks/sessionDuck';
import { IoIosLogOut } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const ProfileDropDown = ({ visible, logout, user }) => {
  const navigate = useNavigate();
  return <div className={`profile ${visible ? "translate-y-0" : "translate-y-full"} ease-in-out duration-150`}>
    <div className="text-center w-full mt-6">{user.email}</div>
    <div className="border-b-2 mx-4"></div>
    <Link to="/profile" className="nav-option"><ImCommand className="" />PROFILE</Link>
    <Link to="/login" className="nav-option"><ImCommand className="" />SIGN IN</Link>
    <Link to="/settings" className="nav-option"><ImCommand className="" />SETTINGS</Link>
    <Link to="/about" className="nav-option"><ImCommand className="" />ABOUT US</Link>
    <Link to="/reports" className="nav-option"><ImCommand className="" />REPORTS</Link>
    <button onClick={() => { logout(); setVisibility(); navigate("/home") }} className="nav-option"><IoIosLogOut className="" />LOGOUT</button>
  </div>
};

const mapStateToProps = (state) => {
  const { user } = state.session;
  return {
    user
  }
}

export default connect(mapStateToProps, { logout })(ProfileDropDown);
