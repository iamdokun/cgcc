import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./styles/App.css";
import Home from "./home";
import HeadAcademy from "./head-of-academy";
import ManagerLearningDevelopment from "./manager-learning-development";
import BusinessDevelopmentManager from "./business-development-manager";
import TechnicalAdministrator from "./technical-administrator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
      </Routes>
      <Routes>
      <Route path="/jobs/manager-learning-development" Component={ManagerLearningDevelopment} />
      </Routes>
      <Routes>
      <Route path="/jobs/head-of-academy" Component={HeadAcademy} />
      </Routes>
      <Routes>
      <Route path="/jobs/business-development-manager" Component={BusinessDevelopmentManager} />
      </Routes>
      <Routes>
      <Route path="/jobs/technical-administrator" Component={TechnicalAdministrator} />
      </Routes>
    </Router>
  );
}

export default App;
