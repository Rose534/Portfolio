import React, { useState } from 'react';

function Skills({ projects, setProjects }) {
  const [imageURL, setImageURL] = useState('');
  const [title, setTitle] = useState('');

  function handleImageURLChange(event) {
    setImageURL(event.target.value);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    const newProject = { image_url: imageURL, title };
    fetch('https://rose-portfolio-sinatra.onrender.com/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    })
      .then(response => response.json())
      .then(data => {
        setProjects([...projects, data]);
        setImageURL('');
        setTitle('');
      });
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2 id="newproject">Add New Project</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="image-url">Image URL:</label>
            <input type="text" id="image-url" value={imageURL} onChange={handleImageURLChange} />
          </div>
          <div className="form-group">
            <label id="tite" htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={handleTitleChange} />
          </div>
          <button id="createbtn"type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
}

export default Skills;
