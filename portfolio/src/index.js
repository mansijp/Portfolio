import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Webpages--------------------
import HomePage from './Home/Home';
import SkillsPage from './Skills/Skills';
import EducationPage from './Education/Education';
import ProjectsPage from './Projects/Projects';
import ExperiencePage from './Experience/Experience';
import SocialsPage from './Socials/Socials';

//-------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
    <SkillsPage />
    <EducationPage />
    <ProjectsPage />
    <ExperiencePage />
    <SocialsPage />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
