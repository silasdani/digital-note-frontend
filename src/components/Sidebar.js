import React from 'react'
import { AiOutlineVideoCameraAdd, AiOutlineMessage } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { ImBook, ImCommand } from "react-icons/im";
import { connect } from 'react-redux';
import { logout } from '../redux/ducks/sessionDuck';
import { Link } from 'react-router-dom'

const Sidebar = ({ visible }) => {

  return (
    <div className={`sidebar ${visible ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300`}  >
      <div className="text-white space-y-2">
        <button className="nav-option"><ImBook className="mx-6 hover:origin-center hover:rotate-90 hover:duration-500" /> MY COURSES</button>
        <button className="nav-option"><AiOutlineMessage className="mx-6" />MESSAGES</button>
        <button className="nav-option"><ImCommand className="mx-6" />ASSIGNMENTS</button>
        <Link to="/room" className="nav-option"><AiOutlineVideoCameraAdd className="mx-6" />MEET</Link>
      </div>
    </div>)
}

export default connect(null, { logout })(Sidebar);
