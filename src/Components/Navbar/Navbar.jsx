import React, { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/traditional_fishpainting.png'
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu,setMobileMenu] = useState(false);
    const menuRef = useRef(null);
    
    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false); 
        //scrolling by 50 pixels will turn navbar dark
      })
    },[])

    const toggleMenu = () => {
      // mobileMenu? setMobileMenu(false) : setMobileMenu(true);
      setMobileMenu((prev) => !prev);
    }

    useEffect(() => {
      const handleClickOutside = (event) => {
        console.log('Clicked outside menu', event.target);
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMobileMenu(false);
        }
      };
    
      document.addEventListener('mousedown', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo2} alt="" className='logo'/>
        <ul ref={menuRef} className = {mobileMenu? '': 'hide-mobile-menu'}>
            <li><Link to = 'hero' smooth = {true} offset={0} duration={500}>Home</Link></li>
            <li><Link to = 'about' smooth = {true} offset={-300} duration={500}>About Me</Link></li> {/*About us*/}
            <li><Link to = 'project' smooth = {true} offset={-300} duration={500}>Projects</Link></li> {/*Program*/}
            {/* <li><Link to = 'socials' smooth = {true} offset={-300} duration={500}>Hobbies</Link></li> Campus */}
            <li><Link to = 'testimonials' smooth = {true} offset={-300} duration={500}>My Favourites</Link></li> {/*Testimonials*/}
            <li><Link to = 'contact' smooth = {true} offset={-300} duration={500} button className='btn'>Contact me</Link></li> {/*Contact us*/}
        </ul>
        <img src={menu_icon} alt="" className = 'menu-icon' onClick = {toggleMenu}/>
    </nav>
  )
}

export default Navbar
