import React from 'react';
import ProjectPage from './ProjectPage/ProjectPage';
import ProjectListPage from './ProjectListPage/ProjectListPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import HomePage from './HomePage/HomePage'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Explore Projects</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
        <li><Link to="/login">Login Up</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact={true} path='/' render={(props)=><HomePage {...props} />} />
        <Route path='/projects' render={(props)=><ProjectListPage {...props}/>}/>
        <Route path='/projects/:id' render={(props)=><ProjectPage {...props}/>}/>
        {/* React Component path may be placed here once completed
        <Route path="/sign-up" component={TODO}/>
        <Route path="/login" component={TODO}/>
        */}
      </Switch>
    </div>
  </Router>
)

export default App;
