import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ProjectPreview from './components/ProjectPreview';

function App() {
  const [showPreview, setShowPreview] = useState({status: false, src: ""});

  const changeState = (status, src) => {
    setShowPreview({status: status, src: src})
  }

  return (
    <div className="App">
      {showPreview.status && <ProjectPreview src={showPreview.src} changeState={changeState}/> }
      <NavBar />
      <Banner />
      <About />
      <Projects changeState={changeState}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
