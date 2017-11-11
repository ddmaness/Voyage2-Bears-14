import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import ErrorBox from './shared/error-box/ErrorBoxContainer'
import ProjectPage from './project-page/ProjectPage';
import ProjectListPage from './project-list-page/ProjectListPage';
import Login from './account/LoginContainer'
import SignUp from './account/SignUpContainer';
import HomePage from './home-page/HomePageContainer';
import Header from './shared/header/HeaderContainer';
import Footer from './shared/footer/Footer';
import SignUpSuccess from './account/SignUpSuccessContainer';
import ProfilePage from './profile/ProfilePageContainer';

import './App.css';


export default function App(props) {
  const { authentication, progress } = props;

  return(
    <Router>
      <div className = "wrapper">
        <Header authentication={authentication} />
        <section className="page-content container-fluid">
            <ErrorBox />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/projects' component={ProjectListPage} />
              <Route path='/projects/:id' component={ProjectPage} />
              <Route exact path='/sign-up' component={SignUp} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/sign-up-success' component={SignUpSuccess} />
              <Route path={`/${authentication.username}`} component={ProfilePage} />
            </Switch>
        </section>
        <div className="loader-wrapper" style={progress > 0 ? { display: 'block' } : { display: 'none' }}>
          <div className="loader-box">
            <div className="loader">Loading...</div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
