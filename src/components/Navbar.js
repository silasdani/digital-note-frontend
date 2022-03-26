import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineVideoCameraAdd, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ImPencil2 } from "react-icons/im";
import gravatar from 'gravatar'
import { connect } from 'react-redux';

const Navbar = ({ isAuthenticated, onHamburger, onProfile, user: { email }, ...props }) => {
  return (
    <div className="navbar">
      <div className="h-14 text-white flex justify-center items-center space-x-2">
        <AiOutlineMenu color="white" className="w-6 h-6" onClick={() => onHamburger()} />
        <Link to="/dashboard" className="flex flex-row space-x-2" onClick={() => { onHamburger(false); onProfile(false) }}>
          <div className="py-2 bg-red-700 rounded-xl w-10 flex items-center justify-center"><ImPencil2 color="white" /></div>
          <span className="text-xl text-white">Digital.init</span>
        </Link>
      </div>
      <div className="h-14 flex justify-center items-center">
        <input className="input bg-opacity-40 px-4" placeholder='Key' />
        <button className="bg-gray-400 w-20 h-10 flex items-center justify-center rounded-r-md">
          <AiOutlineSearch color="white" className="w-6 h-6" />
        </button>
      </div>
      <div className="h-14 text-white flex items-center">
        {isAuthenticated &&
          <button className="hover:opacity-40" onClick={(ev) => { ev.preventDefault(); onProfile() }}>
            <img className="w-10 h-10 rounded-full" src={gravatar.url(email)} />
          </button>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { user, signedIn: isAuthenticated } = state.session;
  return {
    user,
    isAuthenticated
  }
}

export default connect(mapStateToProps, {})(Navbar);