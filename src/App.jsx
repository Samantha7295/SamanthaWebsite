import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Socials from './Components/Socials/Socials'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <About/>
        <Title subtTitle='My Projects' title='Creations and Works in Progress'/>
        <Projects/>
        {/* <Title subtTitle='Socials' title='Get to know me!'/>
        <Socials/> */}
        <Title subtTitle='My Favourites' title='Fun Picks from My Life'/>
        <Testimonials/>
        <Title subtTitle='Contact Us' title='I’d Love to Hear from You!'/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
