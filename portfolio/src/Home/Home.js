import './Home.css';
import ResumePDF from './Patel_Mansi_2022.pdf';

function HomePage() {

  const openHome = () => {
    const e = document.getElementById("menubar");
    if (e) { e.scrollIntoView({behavior: "smooth"}); }
  }
  const openSkills = () => {
    const e = document.getElementById("skills");
    if (e) { e.scrollIntoView({behavior: "smooth"}); }
  }
  const openExperience = () => {
    const e = document.getElementById("skills");
    if (e) { e.scrollIntoView({behavior: "smooth"}); }
  }
  const openProjects = () => {
    const e = document.getElementById("skills");
    if (e) { e.scrollIntoView({behavior: "smooth"}); }
  }
  const openEducation = () => {
    const e = document.getElementById("skills");
    if (e) { e.scrollIntoView({behavior: "smooth"}); }
  }
  const openSocials = () => {
    const e = document.getElementById("skills");
    if (e) { e.scrollIntoView({behavior: "smooth"}); }
  }
  function openResume() {
    window.open(ResumePDF);
  }


  return (
    <body>
    <div id="menubar">
      <table>
      <tr>
        <td><div id="name">Mansi Patel</div></td>
        <td><div onClick={openHome} id="item1">Home</div></td>
        <td><div onClick={openSkills} id="item2">Skills</div></td>      
        <td><div onClick={openExperience} id="item3">Experience</div></td>
        <td><div onClick={openProjects} id="item4">Projects</div></td>
        <td><div onClick={openEducation} id="item5">Education</div></td>
        <td><div onClick={openSocials} id="item6">Socials</div></td>
        <td><div onClick={openResume} id="resume">Resume</div></td>
      </tr>
      <div id="spacerhome"></div>
      <tr>
        <td><div id="about1"><h4>Hi, I'm Mansi Patel</h4></div></td>
        <td colspan="7" rowspan="3"><div id="about2">
          <img alt="" src={require('./profile.jpg')}></img></div></td>
      </tr>
      <tr>
        <td><div id="about3"><h6>A software engineering student</h6></div>
        <div onClick={openResume} id="about4"><h6>Access Resume Here</h6></div></td>
      </tr>
      </table>
    </div>
    </body>
  );
}


export default HomePage;
