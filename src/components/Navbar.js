import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineVideoCameraAdd, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ImPencil2 } from "react-icons/im";
import gravatar from 'gravatar'
import { connect } from 'react-redux';

const Navbar = ({ onHamburger, onProfile, user: { email } }) => {
  return (
    <div className="navbar">
      <div className="h-14 text-white flex justify-center items-center space-x-2">
        <button className="mr-6"><AiOutlineMenu color="white" className="w-6 h-6" onClick={onHamburger} /></button>
        <div className="py-2 bg-red-700 rounded-xl w-10 flex items-center justify-center"><ImPencil2 color="white" /></div>
        <span className="text-xl text-white">Digital.init</span>
      </div>
      <div className="h-14 w-2/5 flex justify-center items-center">
        <input className="input bg-opacity-40 px-4 " placeholder='Search' />
        <button className="bg-gray-400 w-20 h-10 flex items-center justify-center"><AiOutlineSearch color="white" className="w-6 h-6" /></button>
      </div>
      <div className="h-14 text-white flex items-center space-x-4">
        <Link to="/room" className="h-10 px-2 hover:bg-gradient-to-t hover:bg-gray-900 rounded-full"><AiOutlineVideoCameraAdd className="w-8 h-8" /></Link>
        <button className="h-10 px-2 hover:bg-gradient-to-t hover:bg-gray-900 rounded-full"><IoIosNotificationsOutline className="w-8 h-8" /></button>
        <button className="w-14 hover:opacity-40" onClick={onProfile}><img className="w-10 h-10 rounded-full" src={gravatar.url(email)} /></button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { user } = state.session;
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);