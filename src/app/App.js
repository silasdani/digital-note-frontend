import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, HomePage, NewExamPage, EditExamPage } from '../pages';
import ExamListPage from '../pages/ExamListPage';
import MySchoolPage from '../pages/MySchoolPage';
import ProfilePage from '../pages/ProfilePage';
import ResultsPage from '../pages/ResultsPage';
import SupportPage from '../pages/SupportPage';
import DashboardPage from '../pages/DashboardPage';
import GuestRoute from '../routes/GuestRoute';
import TeacherRoute from '../routes/TeacherRoute';
import { autoLogin } from '../redux/ducks/sessionDuck';
import Alert from '../components/Alert';
import StudentWorkspacePage from '../pages/StudentWorkspacePage';

const App = ({ session, autoLogin }) => {
  useEffect(() => {
    autoLogin();
  }, []);

  if (session.authenticated === null) return null;

  return (
    <BrowserRouter>
      <Alert />
      <Navbar />
      <div className="absolute w-screen h-96 lg:h-64 bg-accent"></div>
      <div style={{ minHeight: '93.5vh' }}>
        <Routes>
          <Route
            path="/*"
            element={
              <React.Fragment>
                <TeacherRoute path="/support" component={SupportPage} />
                <TeacherRoute path="/dashboard" component={DashboardPage} />
                <TeacherRoute path="/new_exam" component={NewExamPage} />
                <TeacherRoute path="/edit_exam" component={EditExamPage} />
                <TeacherRoute path="/exam_list" component={ExamListPage} />
                <TeacherRoute path="/results" component={ResultsPage} />
                <TeacherRoute path="/results/:id" component={ResultsPage} />
                <TeacherRoute path="/my_school" component={MySchoolPage} />
                <TeacherRoute path="/profile" component={ProfilePage} />
                <GuestRoute path="/" component={HomePage} />
                <GuestRoute path="/login" component={LoginPage} />
                <GuestRoute path="/workspace" component={StudentWorkspacePage} />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default connect(({ session }) => session, { autoLogin })(App);
