import React from 'react';
import { Link } from 'react-router-dom'
import { ImCommand } from 'react-icons/im';

const ProfileDropDown = ({ visible }) => {
  return <div className={`profile ${visible ? "translate-y-0" : "translate-y-full"} ease-in-out duration-150`}>
    <Link to="/profile" className="nav-option mt-14"><ImCommand className="mx-6" />PROFILE</Link>
    <Link to="/login" className="nav-option"><ImCommand className="mx-6" />SIGN IN</Link>
    <Link to="/settings" className="nav-option"><ImCommand className="mx-6" />SETTINGS</Link>
    <Link to="/about" className="nav-option"><ImCommand className="mx-6" />ABOUT US</Link>
    <Link to="/reports" className="nav-option"><ImCommand className="mx-6" />REPORTS</Link>
  </div>
};

export default ProfileDropDown;
