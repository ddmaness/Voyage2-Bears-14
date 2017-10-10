import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const SearchProjects = () => (
  <Router>
    <div>
      <button><Link to="/">Explore Projects</Link></button>
    
    <hr/>

      {/* React Component path may be placed here once completed
      <Route path="/explore-projects" component = {TODO}/>
      */}
    </div>
  </Router>
)

export default SearchProjects;
