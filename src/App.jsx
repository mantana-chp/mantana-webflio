import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact'
function App() {
  return (
    <div className="App h-auto">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App
