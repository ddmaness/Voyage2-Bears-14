import React from 'react';

const SearchProjects = () => (
    <div>
      <button onClick={()=>this.props.history.push('/projects')}>Explore projects</button>
      <hr/>
    </div>
)

export default SearchProjects;
