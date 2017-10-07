import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
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

      <Route exact path="/" component={Homepage}/>
      {/* React Component path may be placed here once completed
      <Route path="/explore-projects" component = {TODO}/>
      <Route path="/sign-up" component={TODO}/>
      <Route path="/login" component={TODO}/>
      */}
    </div>
  </Router>
)

export default App;
