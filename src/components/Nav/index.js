import React from 'react';
import { Link } from 'react-router-dom';

function Nav(pageSelected, setPageSelected) {
  
  return (
    <>
    <header>
      <h2>Full-Stack Web Developer</h2>

      <nav>
        <ul className='navbar'>
          <li ><a href='http://localhost:3000/'>Home</a></li>
          <li><Link to={"about"}>About</Link></li>
          <li><Link to={"contact"}>Contact Me</Link></li>
          <li><Link to={"projects"}>My Projects</Link></li>
        </ul>
      </nav>
      </header>
    </>
  )
}

export default Nav;