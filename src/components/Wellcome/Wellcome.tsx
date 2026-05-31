import { useState } from 'react'
import './wellcome.css'
import { Menu } from 'lucide-react';

const Wellcome = () => {

    const [ showMenu, setShowMenu ] = useState<boolean>(false)
    const handleMenu = () => setShowMenu(!showMenu)

    


  return (
    <>
    <header id='main_header'>
        <div>
            <h1 className='nick-name'>Sant v7</h1>
        </div>

        <Menu id='menu_btn' color='white' onClick={handleMenu} size={37} />
         <nav id='main_navbar' className={showMenu ? 'open' : ""}>
            <ul id='ul-list'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <a href='#' className='contact_btn'>Contact</a>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Wellcome




