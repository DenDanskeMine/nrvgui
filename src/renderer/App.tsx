
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/Arla-logo.png';
import './App.css';


function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div><center>
      <h1>NrVium PC Setup Script</h1></center>
      <div className="Hello">
        <a
          href="https://teams.microsoft.com/l/entity/com.microsoft.teamspace.tab.planner/tt.c_19:7aaf7ab4a89447019a64357ae9df6161@thread.tacv2_p_9bDkk5A4E0GKIMr7Pc_D_5YAFRir_h_1691734061533?tenantId=f10e34fe-8994-4b52-a7da-4f7aa9068ca0&webUrl=https%3A%2F%2Ftasks.teams.microsoft.com%2Fteamsui%2FpersonalApp%2Falltasklists&context=%7B%22subEntityId%22%3A%22%2Fboard%2Ftask%2FhBdcgSOyK06-XwC3xm7925YAOUkp%22%2C%22channelId%22%3A%2219%3A7aaf7ab4a89447019a64357ae9df6161%40thread.tacv2%22%7D"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Læs Vejledning
          </button>
        </a>
        <a
          href="/setup-pc"
          target="_blank"
          rel="noreferrer"
        >
<button type="button" onClick={() => ipcRenderer.invoke('run-script', '/path/to/your/script.ps1')}>
  <span role="img" aria-label="folded hands">
  🛠️
  </span>
  Setup PC
</button>
        </a>
      </div>
      
      
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
