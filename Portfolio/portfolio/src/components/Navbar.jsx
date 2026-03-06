import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <nav className='navbar'>

    <div className='nav-logo'>&lt; Turma Dev/&gt;</div>
    
<ul className='nav-links'>
    <li>
<a href='#home'>Home</a>
    </li>
    <li>
<a href='#sobre'>About</a>
    </li>
    <li>
        <a href='#projetos'>Projects</a>
    </li>

<li>
<a href='#contato'>Contato</a>
</li>



</ul>
</nav>
  
  )
}

export default Navbar