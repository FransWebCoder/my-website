import './App.css';
import '../node_modules/remixicon/fonts/remixicon.css'

// COMPONENTS
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
        <div className="container">
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
        </div>
    </>
  );
}

export default App;
