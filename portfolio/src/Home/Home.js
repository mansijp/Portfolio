import './Home.css';

function HomePage() {
  
  return (

    <body>
    <div id="menubar">
      <table>
      <tr>
        <td><div id="name">Mansi Patel</div></td>
        <td><div id="item1">Home</div></td>
        <td><div id="item2">Skills</div></td>      
        <td><div id="item3">Experience</div></td>
        <td><div id="item4">Projects</div></td>
        <td><div id="item5">Education</div></td>
        <td><div id="item6">Socials</div></td>
        <td><div id="resume">Resume</div></td>
      </tr>
      <div className="spacer"></div>
      <tr>
        <td><div id="about1"><h4>Hi, I'm Mansi Patel</h4></div></td>
        <td colspan="7" rowspan="3"><div id="about2">
          <img alt="" src={require('./profile.jpg')}></img></div></td>
      </tr>
      <tr>
        <td><div id="about3"><h6>A software engineering student</h6></div>
        <div id="about4"><h6>Access Resume Here</h6></div></td>
      </tr>
      </table>
    </div>
    </body>
  );
}


export default HomePage;
