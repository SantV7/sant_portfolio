
import styles from './wellcome.module.css'
import { ChartNoAxesGantt } from 'lucide-react';
import { Menu } from 'lucide-react';

interface MenuProps {
 showMenu: boolean;
 setShowMenu: (void: boolean)
}

const Wellcome = ({showMenu, setShowMenu}: MenuProps) => {

    const handleMenu = () => setShowMenu(!showMenu)

    


  return (
    <>
    <header className={styles.main_header}>
        <div>
            <h1 className={styles.nick_name}>Sant v7</h1>
        </div>

        {showMenu ? <ChartNoAxesGantt className='menu_btn'  onClick={handleMenu} size={37} color='white'/> : <Menu className='menu_btn' color='white' onClick={handleMenu} size={37} /> }
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




