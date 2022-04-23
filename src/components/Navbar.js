import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineVideoCameraAdd, AiOutlineMenu, AiOutlineSearch, AiOutlineForm, AiOutlineInfoCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsCardChecklist, BsFileEarmarkCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline, IoSchoolOutline } from "react-icons/io";
import { MdOutlineSchool } from "react-icons/md";
import gravatar from 'gravatar'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const teacherRoutes = [
  { name: 'Support', path: '/support', icon: <AiOutlineInfoCircle /> },
  { name: 'New Exam', path: '/new_exam', icon: <AiOutlineForm /> },
  { name: 'Exam list', path: '/exam_list', icon: <BsCardChecklist /> },
  { name: 'Results', path: '/results', icon: <BsFileEarmarkCheck /> },
  { name: 'My school', path: '/my_school', icon: <MdOutlineSchool /> },
  { name: 'Profile', path: '/profile', icon: <CgProfile /> },
  { name: 'Sign out', path: '/sign_out', icon: <AiOutlineArrowRight /> },
]

const guestRoutes = [
  { name: 'Results', path: '/results', icon: <BsFileEarmarkCheck /> },
  { name: 'My school', path: '/my_school', icon: <MdOutlineSchool /> },
  { name: 'Profile', path: '/profile', icon: <CgProfile /> },
  { name: 'Sign out', path: '/sign_out', icon: <AiOutlineArrowRight /> },
]

const Navbar = ({ isAuthenticated, user: { email }, ...props }) => {
  const navigate = useNavigate();
  const routes = !isAuthenticated ? teacherRoutes : guestRoutes;

  return (
    <div className="flex justify-between mt-0 px-6 bg-gradient-to-t from-gray-400 to-gray-500">
      <Link to="/dashboard" className="h-14 text-white text-xl flex items-center">
        Digital.init
      </Link>
      <div className="text-white flex items-center">
        {routes.map((route) => {
          return (<button key={Math.random()} onClick={() => navigate(route.path)}>
            <div className="p-2 text-center flex flex-col items-center">
              {route.icon}
              <span>
                {route.name}
              </span>
            </div>
          </button>);
        })}
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