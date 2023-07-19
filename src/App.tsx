import "./App.scss";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="main-container">
      {/* AboutMe Component */}
      <AboutMe />

      <div className="vertical-divider-first"></div>
      <div className="horizontial-divider"></div>
      <div className="vertical-divider-second"></div>

      {/* Resume Component: contains all resume tabs */}
      <Resume />
    </div>
  );
}

export default App;
