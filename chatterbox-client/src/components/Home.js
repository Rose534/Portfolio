import React, { useState, useEffect } from 'react';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://rose-portfolio-sinatra.onrender.com/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  

    return(
        <div>
           <img id= "girl" src="https://53525363.000webhostapp.com/Images/Kezia_Gabriella_-_Anxiety-removebg-preview.png" alt=""/>
           <div id="hello">
            <h1 id="helo"> HELLO,</h1>
            <h3 id= "illustrator">I am an <mark>ILLUSTRATOR,</mark> <mark> GRAPHIC DESIGNER </mark></h3>
            <h3 id= "ui">and <mark>UI/UX </mark>designer.</h3>
           </div>
           <div>
            <p id="people"> With many years of experience in the industry, <br></br>
            I have developed a keen eye for design, a deep <br></br>understanding of user behavior, and a 
            commitment <br></br>to delivering exceptional results on every project.</p>

           </div>
           <div id="email">
           <a href="https://www.instagram.com/illustrationsbywambui/" target="_blank"><img src="https://53525363.000webhostapp.com/Images/icons8-instagram-48-removebg-preview.png" alt=""/></a>
           <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmTNxNvmpKRVHmQwkWPdlQFvwshQVPrrkDBVBbSwnhTngPHPjTWwrhtJLqFqQhhcPrgsDL" target="_blank"><img src="https://53525363.000webhostapp.com/Images/icons8-mail-48-removebg-preview.png" alt=""/></a>
           </div>
           <div>
            <h1 id="div2">About Me</h1>
            <p id="rose">My name is Rose, I am a designer from Nairobi, Kenya with 3 years of experience. <br></br>
                Below are some of the projects i've worked on, thanks for stopping by.</p>
           </div>
           <div id="div3">
           <img src="https://53525363.000webhostapp.com/Images/Genie_Espinosa_on_Behance-removebg-preview.png" alt=""/>
           </div>
           <div id="div4">
            <h1>Skills</h1>
           </div>
           <div id="div5">
            <ul>
           <li><mark>Visual Design</mark></li>
            <li><mark>User Research</mark></li>
            <li><mark>Wireframing</mark></li>
            <li><mark>User Experience Design</mark></li>
            <li><mark>Visual Storytelling</mark></li>
            <li><mark>Editorial Illustration</mark></li>
            </ul>
           </div>
           <div className="container-fluid">
  <div id="div6">
    <h1>Recent projects</h1>
    <div className="row">
      {projects.map(project => (
        <div className="col-md-4 project" key={project.id}>
          <img className="project-image img-fluid" src={project.image_url} alt={project.title} />
          <h2>{project.title}</h2>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
    )

}

export default Home; 