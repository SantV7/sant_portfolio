
import styles from './wellcome.module.css'
import { ChartNoAxesGantt } from 'lucide-react';
import { Menu } from 'lucide-react';

interface MenuProps {
 showMenu: boolean;
 setShowMenu: (value: boolean) => void
}

const Wellcome = ({showMenu, setShowMenu}: MenuProps) => {

    const handleMenu = () => setShowMenu(!showMenu)

    


  return (
    <>
    <header className={styles.main_header}>
        <div>
            <h1 className={styles.nick_name}>Sant v7</h1>
        </div>

        {showMenu ? <ChartNoAxesGantt className='menu_btn'  onClick={handleMenu} size={37} color='white'/> : <Menu className={styles.menu_btn} color='white' onClick={handleMenu} size={37} /> }
         <nav className={`${styles.main_navbar} ${showMenu ? styles.open : ""}`}>
            <ul className={styles.ul_list}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <a href='#' className={styles.contact_btn}>Contact</a>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Wellcome




