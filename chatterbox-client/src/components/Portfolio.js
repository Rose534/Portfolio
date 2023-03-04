import React, { useState, useEffect } from 'react';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://rose-portfolio-sinatra.onrender.com/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  const handleDelete = (id) => {
    
    fetch(`https://rose-portfolio-sinatra.onrender.com/projects/${id}`, {
      method: 'DELETE'
    }).then(() => {
    
      setProjects(projects.filter(project => project.id !== id));
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">Illustrations By Rose</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map(project => (
          <div className="col-md-4 project" key={project.id}>
            <div className="project-container">
              <img className="project-image img-fluid" src={project.image_url} alt={project.title} />
              <div className="project-overlay">
                <button className="delete-btn" onClick={() => handleDelete(project.id)}>X</button>
              </div>
              <div>
                <h5>{project.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
