import React from 'react';
import ProjectPage from './project-page/ProjectPage';
import ProjectListPage from './project-list-page/ProjectListPage';
import SignUp from './sign-up/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './home-page/HomePageContainer';
import Header from './shared/header/Header';

const App = (props) => (
  <Router>
    <div>
      <Header username='Placeholder' />
      <p>{props.progress}</p>
      <Switch>
        <Route exact path='/' render={(props)=><HomePage {...props} />} />
        <Route path='/projects' render={(props)=><ProjectListPage {...props}/>}/>
        <Route path='/projects/:id' render={(props)=><ProjectPage {...props}/>}/>
        <Route path='/sign-up' render={(props)=><SignUp {...props}/>}/>
      </Switch>
    </div>
  </Router>
)

export default App;
