import React, { useState } from 'react';

const Projects = () => {

  const [ projects, setProjects ] = useState([ 'projeto', 'outro projeto2' ]);

  function handleAddPorjects() {
    setProjects([ ...projects, 'novo projeto' ]);
  }

  return (
    <>
      <h1>Estado e imutabilidade</h1>
      <ul>
        {projects.map(projects => <li>{projects}</li>)}
      </ul>
      <button type="button" onClick={handleAddPorjects}>Add projeto</button>
    </>
  )
} 

export default Projects;