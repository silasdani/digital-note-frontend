import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineForm, AiOutlineInfoCircle } from "react-icons/ai";
import { BsCardChecklist, BsFileEarmarkCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSchool } from "react-icons/md";
import { logout } from '../redux/ducks/sessionDuck';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const teacherRoutes = [
  { name: 'Support', path: '/support', icon: <AiOutlineInfoCircle /> },
  { name: 'New Exam', path: '/new_exam', icon: <AiOutlineForm /> },
  { name: 'Exam list', path: '/exam_list', icon: <BsCardChecklist /> },
  { name: 'Results', path: '/results', icon: <BsFileEarmarkCheck /> },
  { name: 'My school', path: '/my_school', icon: <MdOutlineSchool /> },
  { name: 'Profile', path: '/profile', icon: <CgProfile /> },
]

const guestRoutes = [
  { name: 'RESULTS', path: '/results', icon: <BsFileEarmarkCheck /> },
  { name: 'MY SCHOOL', path: '/my_school', icon: <MdOutlineSchool /> },
  { name: 'LOGIN', path: '/login' },
]

const Navbar = ({ isAuthenticated, currentUser, logout }) => {
  const routes = isAuthenticated ? teacherRoutes : guestRoutes;
  // const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/dashboard" className="btn btn-ghost normal-case text-xl">DIGITAL INIT</Link>
      </div>
      <div className="flex-none menu menu-horizontal">
        {routes.map((route) => {
          return (
            <li key={Math.random()}>
              <Link to={route.path}>
                {route.name}
              </Link>
            </li>);
        })}
        {isAuthenticated && <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={currentUser?.profilePic || require("../assets/empty_pic.jpeg")} />
            </div>
          </label>

          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">{currentUser.name}</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><Link to="/login" onClick={(e) => { logout() }}>Logout</Link></li>
          </ul>
        </div>}
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  const { currentUser } = state.session.session;
  return {
    currentUser,
    isAuthenticated: state.session.session.authenticated,
  }
}

export default connect(mapStateToProps, { logout })(Navbar);