import React from 'react';
import ProjectPage from './project-page/ProjectPage';
import ProjectListPage from './project-list-page/ProjectListPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from './account/LoginContainer'
import SignUp from './account/SignUp';
import HomePage from './home-page/HomePageContainer';
import HeaderContainer from './shared/header/HeaderContainer';

import './App.css';


export default function App(props) {
  const { authentication, progress } = props;

  return(
    <Router>
      <div className = "wrapper">
        <HeaderContainer authentication={authentication} />
        <section className="page-content container-fluid">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/projects' component={ProjectListPage} />
            <Route path='/projects/:id' component={ProjectPage} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exaxt path='/login' component={Login} />
          </Switch>
        </section>
        <div className="loader-wrapper" style={progress > 0 ? { display: 'block' } : { display: 'none' }}>
          <div className="loader-box">
            <div className="loader">Loading...</div>
          </div>
        </div>
      </div>
    </Router>
  );
}
