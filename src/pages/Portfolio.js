import React, {useState} from 'react';
import { Navigation } from '../components/Navigation';
import { NavigationButtons } from '../components/NavigationButtons';
import { SocialNetworks } from '../components/SocialNetworks';
import { projectsData } from '../data/projectsData';

export const Portraits = () => {
  const [projects] = useState(projectsData);
  return (
    <main>
      <div className='project'>
        <div className='project-main'>
          <div className='project-content'>
          <h1>Portraits</h1>
          </div>
          <div className='project-list'>
            { projects.filter(project => project.type === "portrait").map((project) => (
              <div key={project.id} className='img-content'>
                <div className='img-container hover'>
                  <span>
                    <h3>{project.title}</h3>
                  </span>
                  <img src={project.img} alt={project.title}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Navigation></Navigation>
        <SocialNetworks></SocialNetworks>
        <NavigationButtons left={'/concept'} right={'/creations'}></NavigationButtons>
      </div>
    </main>
  );
};

export const Créations = () => {
  const [projects] = useState(projectsData);
  return (
    <main>
      <div className='project'>
        <div className='project-main'>
          <div className='project-content'>
          <h1>Créations</h1>
          </div>
          <div className='project-list'>
            { projects.filter(project => project.type === "creation").map((project) => (
              <div key={project.id} className='img-content'>
                <div className='img-container hover'>
                  <span>
                    <h3>{project.title}</h3>
                  </span>
                  <img src={project.img} alt={project.title}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Navigation></Navigation>
        <SocialNetworks></SocialNetworks>
        <NavigationButtons left={'/portraits'}></NavigationButtons>
      </div>
    </main>
  );
};