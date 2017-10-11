import React from 'react';
import Postpage from './components/Postpage';
import Projectpage from './components/Projectpage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Homepage from './homepage'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore-projects">Explore Projects</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
        <li><Link to="/login">Login Up</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact={true} path='/' render={(props)=><Homepage {...props} />} />
        <Route path='/explore-projects' render={(props)=><Postpage {...props}/>}/>
        <Route path='/project-page/:id' render={(props)=><Projectpage {...props}/>}/>
        {/* React Component path may be placed here once completed
        <Route path="/sign-up" component={TODO}/>
        <Route path="/login" component={TODO}/>
        */}
      </Switch>
    </div>
  </Router>
)

export default App;
