import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App