import { useState, useEffect } from 'react';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    fetch('https://rose-portfolio-sinatra.onrender.com/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://rose-portfolio-sinatra.onrender.com/projects/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setProjects(projects.filter(project => project.id !== id));
    });
  };

  const toggleUpdateForm = (project) => {
    setCurrentProject(project);
    setShowUpdateForm(!showUpdateForm);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const id = currentProject.id;

    fetch(`https://rose-portfolio-sinatra.onrender.com/projects/${id}`, {
      method: 'PUT',
      body: formData,
    }).then(() => {
      
      fetch('https://rose-portfolio-sinatra.onrender.com/projects')
        .then(response => response.json())
        .then(data => {
          setProjects(data);
          setShowUpdateForm(false);
        });
    });
  };

  return (
    <div className="container">
      <h1 id="illustrations" className="text-center mb-5">Illustrations By Rose</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map(project => (
          <div className="col-md-4 project" key={project.id}>
            <div className="project-container">
              <img className="project-image img-fluid" src={project.image_url} alt={project.title} />
              <div className="project-overlay">
                <button className="update-btn" onClick={() => toggleUpdateForm(project)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(project.id)}>X</button>
              </div>
              <div>
                <h5>{project.title}</h5>
              </div>
            </div>
            {showUpdateForm && currentProject && currentProject.id === project.id && (
              <form className="update-form" onSubmit={handleUpdate}>
                <input type="text" name="title" defaultValue={currentProject.title} />
                <input type="text" name="image_url" defaultValue={currentProject.image_url} />
                <button type="submit">Save</button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
