import React from 'react'
import { AiOutlineVideoCameraAdd, AiOutlineMessage } from "react-icons/ai";
import { ImBook, ImCommand } from "react-icons/im";
import { connect } from 'react-redux';
import { logout } from '../redux/ducks/sessionDuck';
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className="">
      <div className="text-white space-y-2">
        <Link to="/courses" className="nav-option"><ImBook className="mx-6 hover:origin-center hover:rotate-90 hover:duration-500" /> MY COURSES</Link>
        <Link to="/" className="nav-option"><AiOutlineMessage className="mx-6" />MESSAGES</Link>
        <Link to="/" className="nav-option"><ImCommand className="mx-6" />ASSIGNMENTS</Link>
        <Link to="/room" className="nav-option"><AiOutlineVideoCameraAdd className="mx-6" />MEET</Link>
      </div>
    </div>)
}

export default connect(null, { logout })(Sidebar);
