
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Services from './components/Services'

function App() {


  return (
   <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Services></Services>
    <Project></Project>
    <Contact></Contact>
   </div>
  )
}

export default App
