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
]

const guestRoutes = [
  { name: 'RESULTS', path: '/results', icon: <BsFileEarmarkCheck /> },
  { name: 'MY SCHOOL', path: '/my_school', icon: <MdOutlineSchool /> },
  { name: 'LOGIN', path: '/login' },
]

const Navbar = ({ authenticated, teacher, logout }) => {
  const routes = authenticated ? teacherRoutes : guestRoutes;

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
        {authenticated && <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={teacher.profilePic || require("../assets/empty_pic.jpeg")} />
            </div>
          </label>

          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">{teacher.name}</span>
              </Link>
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
  const { authenticated } = state.session.session;
  const { teacher } = state.user;
  return {
    teacher,
    authenticated,
  }
}

export default connect(mapStateToProps, { logout })(Navbar);