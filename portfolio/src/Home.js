import './Home.css';

function App() {

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
        <div id="resumeHover"><td><div id="resume">Resume</div></td></div>
      </tr>
      <tr>
        <td><div id="about1"><h4>Hi, I'm Mansi Patel</h4></div></td>
        <td colspan="7"><div id="about2">
          <img alt="" src={require('./abcdef.jpg')}></img></div></td>
      </tr>
      </table>
    </div></body>
  );
}


export default App;
