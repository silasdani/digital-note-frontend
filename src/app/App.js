import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import ProfileDropDown from "../components/ProfileDropDown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import { LoginPage, DashboardPage, MyCoursesPage, HomePage, NewExamPage } from "../pages";
import ExamListPage from "../pages/ExamListPage";
import MySchoolPage from '../pages/MySchoolPage';
import ProfilePage from "../pages/ProfilePage";
import ResultsPage from "../pages/ResultsPage";
import SupportPage from "../pages/SupportPage";
import GuestRoute from "../routes/GuestRoute";
import TeacherRoute from "../routes/TeacherRoute";


const App = (props) => {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const onHamburger = (value = !menu) => setMenu(value)
  const onProfile = (value = !profile) => setProfile(value)

  return (<BrowserRouter>
    <Navbar />
    <div className="m-16" >
      <Routes >
        <Route
          path="/*"
          element={
            <React.Fragment>
              <TeacherRoute
                path="/support"
                component={SupportPage}
              />
              <TeacherRoute
                path="/new_exam"
                component={NewExamPage}
              />
              <TeacherRoute
                path="/exam_list"
                component={ExamListPage}
              />
              <TeacherRoute
                path="/results"
                component={ResultsPage}
              />
              <TeacherRoute
                path="/my_school"
                component={MySchoolPage}
              />
              <TeacherRoute
                path="/profile"
                component={ProfilePage}
              />
              {/* <UserRoute
                path="/dashboard"
                component={DashboardPage}
              />
              <UserRoute
                path="/courses"
                component={MyCoursesPage}
              /> */}
              <TeacherRoute
                path="/"
                component={HomePage}
              />
              {/*
              <GuestRoute
                path="/login"
                component={LoginPage}
              /> */}
            </React.Fragment>
          }
        />
      </Routes>
    </div>
    <Footer></Footer>
  </BrowserRouter>
  )
}

export default connect()(App);
