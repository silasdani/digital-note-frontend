import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineVideoCameraAdd, AiOutlineMenu, AiOutlineSearch, AiOutlineForm, AiOutlineInfoCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsCardChecklist, BsFileEarmarkCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline, IoSchoolOutline } from "react-icons/io";
import { MdOutlineSchool } from "react-icons/md";
import gravatar from 'gravatar'
import { connect } from 'react-redux';

const Navbar = ({ isAuthenticated, user: { email }, ...props }) => {
  return (
    <div className="flex justify-between mt-0 px-6 bg-gradient-to-t from-gray-400 to-gray-500">
      <Link to="/dashboard" className="h-14 text-white text-xl flex items-center">
        Digital.init
      </Link>
      <div className="text-white flex items-center">
        <div className="p-2 text-center flex flex-col items-center"><AiOutlineInfoCircle /><span>Support</span></div>
        <div className="p-2 text-center flex flex-col items-center"><AiOutlineForm /><span>New Exam</span></div>
        <div className="p-2 text-center flex flex-col items-center"><BsCardChecklist /><span>Exam list</span></div>
        <div className="p-2 text-center flex flex-col items-center"><BsFileEarmarkCheck /><span>Results</span></div>
        <div className="p-2 text-center flex flex-col items-center"><MdOutlineSchool /><span>My school</span></div>
        <div className="p-2 text-center flex flex-col items-center"><CgProfile /><span>Profile</span></div>
        <div className="p-2 text-center flex flex-col items-center"><AiOutlineArrowRight /><span>Sign out</span></div>
        {/* <img className="w-10 h-10 rounded-full hover:opacity-40" src={gravatar.url(email)} /> */}
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  const { user, signedIn: isAuthenticated } = state.session;
  return {
    user,
    isAuthenticated
  }
}

export default connect(mapStateToProps, null)(Navbar);