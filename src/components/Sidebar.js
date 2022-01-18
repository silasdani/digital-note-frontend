import React from 'react'
import { AiOutlineVideoCameraAdd, AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import { ImPencil2, ImBook, ImCommand, ImCoinPound } from "react-icons/im";
import { connect } from 'react-redux';
import { logout } from '../redux/ducks/sessionDuck';
import { Link } from 'react-router-dom'

const Sidebar = ({ onHamburger, logout, ...props }) => {

    return (
        <div className="sidebar" >
            <div className="h-14 text-white flex justify-start items-center space-x-2">
                <button className="mr-6"><AiOutlineMenu color="white" className="w-6 h-6 hover:origin-center hover:rotate-90 hover:duration-700" onClick={onHamburger} /></button>
                <div className="py-2 bg-red-700 rounded-xl w-10 flex items-center justify-center"><ImPencil2 color="white" /></div>
                <span className="text-xl text-white">Testud.init</span>
            </div>
            <div className="text-white space-y-2">
                <button className="nav-option"><ImBook className="mx-6 hover:origin-center hover:rotate-90 hover:duration-300" /> MY COURSES</button>
                <button className="nav-option"><AiOutlineMessage className="mx-6" />MESSAGES</button>
                <button className="nav-option"><ImCommand className="mx-6" />ASSIGNMENTS</button>
                <button className="nav-option"><IoMdSettings className="mx-6" />SETTINGS</button>
                <Link to="/room" className="nav-option"><AiOutlineVideoCameraAdd className="mx-6" />MEET</Link>
                <button onClick={() => { logout(); onHamburger() }} className="nav-option"><IoIosLogOut className="mx-6" />LOGOUT</button>
            </div>
        </div>)
}

export default connect(null, { logout })(Sidebar);
