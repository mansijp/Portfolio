import './Skills.css';

function SkillsPage() {

  return (
    <body>
      <div id="spacerskills"></div>
      <h1 id="skills">Skills</h1>
      <div id="logos"> 
        <table>
          <tr>
            <td><img id="logo1" src={require('./c.png')} alt=""></img></td>
            <td><img id="logo2" src={require('./java.png')} alt=""></img></td>
            <td><img id="logo3" src={require('./javafx.png')} alt=""></img></td>
            <td><img id="logo4" src={require('./reactjs.png')} alt=""></img></td>
            <td><img id="logo5" src={require('./html5.png')} alt=""></img></td>
            <td><img id="logo6" src={require('./css3.png')} alt=""></img></td>
            <td><img id="logo7" src={require('./javascript.png')} alt=""></img></td>
            <td><img id="logo8" src={require('./python.png')} alt=""></img></td>
            <td><img id="logo9" src={require('./git.png')} alt=""></img></td>
            <td><img id="logo10" src={require('./gcc.png')} alt=""></img></td>
            <td><img id="logo11" src={require('./outlook.png')} alt=""></img></td>
          </tr>
        </table>
      </div>
    </body>
  );
}


export default SkillsPage;
