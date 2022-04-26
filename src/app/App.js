import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import { LoginPage, HomePage, NewExamPage } from "../pages";
import ExamListPage from "../pages/ExamListPage";
import MySchoolPage from '../pages/MySchoolPage';
import ProfilePage from "../pages/ProfilePage";
import ResultsPage from "../pages/ResultsPage";
import SupportPage from "../pages/SupportPage";
import GuestRoute from "../routes/GuestRoute";
import TeacherRoute from "../routes/TeacherRoute";

const App = (props) => {

  return (<BrowserRouter>
    <Navbar />
    <div className="w-screen h-screen">
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
              <TeacherRoute
                path="/"
                component={HomePage}
              />
              <GuestRoute
                path="/login"
                component={LoginPage}
              />
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
