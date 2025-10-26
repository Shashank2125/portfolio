import React, { useEffect, useState } from 'react'
import { navLinks } from '../../constants'

const NavBar = () => {
  //changing nav bar color when we scroll down
  const [scrolled, setScrolled]=useState(false);

  useEffect(()=>{
    //when the user have scrolled 
   const handleScroll=()=>{
    const isScrolled=window.scrollY>10;
    setScrolled(true);


   } 
   window.addEventListener('scroll', handleScroll);

   //removing the event listener when the function is unmounted
   return()=>window.removeEventListener('scroll',handleScroll);
  },[])
  return (
    //makes nav bar name dynamic if dynaic applies certain properties else
      //other properties from index.css which makes it visible
    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
       <div className='inner'>
        <a className='logo' href='#hero'>
            Shashank | Shekhar | Singh
            </a>
            <nav className='desktop'>
                <ul>
                   {navLinks.map(({link, name})=>(
                <li key={name} className='group'>
                    <a href={link}>
                      <span>{name}</span>
                      <span className='underline'/>  
                    </a>

                </li>))} 
                </ul>

                </nav>
            <a href='#contact' className='contact-btn group'>
                <div className='inner'>
                    <span>Contact me</span>

                </div>

            </a>
                </div> 
    </header>
  )
}

export default NavBar