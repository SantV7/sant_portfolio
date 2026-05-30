import { useState } from 'react'
import './wellcome.css'
import { Ellipsis } from 'lucide-react';

const Wellcome = () => {

    const [showMenu, setShowMenu] = useState<boolean>(true)
    const handleMenu = () => setShowMenu(!showMenu)




  return (
    <>
    <header id='main_header'>
        <div>
            <h1 className='nick-name'>Sant v7</h1>
        </div>

        <Ellipsis id='menu_btn' color='white' onClick={handleMenu} size={40} />
        {showMenu ? <nav id='main_navbar'>
            <ul id='ul-list'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projetos</a></li>
                <a href='#' className='contact_btn'>Contato</a>
            </ul>
        </nav> : ''}
    </header>
    </>
  )
}

export default Wellcome