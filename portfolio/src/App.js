import "./App.css";
import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from './Components/Projects'
import Technologies from "./Components/Technologies";

function App() {
  return (
    <>
      <div className="bg-gray-900" style={{ height: "auto" }}>
        <Navbar />
        <Header />
        <br /><br />
        <Projects />
        <Technologies/>
        <ContactMe/>
      </div>
    </>
  );
}

export default App;
