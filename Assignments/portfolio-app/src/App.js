import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import MyWork from './components/my work/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <MyWork/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App