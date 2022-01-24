import React from 'react';
import { Link } from 'react-router-dom'
import { ImCommand } from 'react-icons/im';

const ProfileDropDown = () => {
    return <div className="profile"  tabindex="0" onblur={() => console.warn("mars")}>
        <div className="nav-option"></div>
        <Link to="/profile" className="nav-option"><ImCommand className="mx-6" />PROFILE</Link>
        <Link to="/settings" className="nav-option"><ImCommand className="mx-6" />SETTINGS</Link>
        <Link to="/about" className="nav-option"><ImCommand className="mx-6" />ABOUT US</Link>
        <Link to="/reports" className="nav-option"><ImCommand className="mx-6" />REPORTS</Link>
    </div>
};

export default ProfileDropDown;
