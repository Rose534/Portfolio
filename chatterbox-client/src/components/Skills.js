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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" value={imageURL} onChange={handleImageURLChange} />
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default Skills;
