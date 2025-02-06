
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
    <Footer></Footer>
   </div>
  )
}

export default App
