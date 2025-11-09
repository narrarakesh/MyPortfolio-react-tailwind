
import About from './components/About';
import Experience from './components/Experience.jsx';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer.jsx';
function App() {
  return <div className='h-auto w-full '>
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
}

export default App
