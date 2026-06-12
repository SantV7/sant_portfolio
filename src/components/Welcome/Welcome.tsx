
import gsap from 'gsap';
import styles from './welcome.module.css'
import { Menu, Headset, House, SquaresExclude, BrainCircuit, ChartNoAxesGantt } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';


interface MenuProps {
 showMenu: boolean;
 setShowMenu: (value: boolean) => void
}



const Wellcome = ({showMenu, setShowMenu}: MenuProps) => {

    const handleMenu = () => setShowMenu(!showMenu)

    const [homeIcon, setHomeIcon] = useState<string>('transparent')
    const [skillsIcon, setSkillsIcon] = useState<string>('transparent')
    const [projectIcon, setProjectIcon] = useState<string>('transparent')
    const [contactIcon, setContactIcon] = useState<string>('transparent')

    const linkHomeRef = useRef<HTMLLIElement | null>(null)

    const linkProjectRef = useRef<HTMLLIElement | null>(null)
    const linkSkillsRef = useRef<HTMLLIElement | null>(null)

    const showHomeIcon = () => {
        setHomeIcon('white')
    }

    const hiddenHomeIcon = () => {
        setHomeIcon('transparent')
    }

    const showSkillsIcon = () => {
        setSkillsIcon('white')
    }

    const hiddenSkillsIcon = () => {
        setSkillsIcon('transparent')
    }
    
    const showProjectIcon = () => {
        setProjectIcon('white')
    }

    const hiddenProjectIcon = () => {
        setProjectIcon('transparent')
    }

    const showContactIcon = () => {
        setContactIcon('white')
    }

    const hiddenContactIcon = () => {
        setContactIcon('transparent')
    }

            useEffect(() => {
            gsap.fromTo(linkHomeRef.current, {
            
                opacity: 0,
                scale: 0.3
            }, {
               
                opacity: 1,
                scale: 1,
                duration: 0.75,
                ease: 'power2'
             })

            gsap.fromTo(linkSkillsRef.current, {
                opacity: 0,
                scale: 0.3
            }, {
              
                opacity: 1,
                scale: 1,
                duration: 0.75,
                ease: 'power2'
             })

            gsap.fromTo(linkProjectRef.current, {
              
                opacity: 0,
                scale: 0.3
            }, {
               
                opacity: 1,
                scale: 1,
                duration: 0.75,
                ease: 'power2'
             })             
        }, [])



  return (
    <>
    <header className={styles.main_header}>
        <div>
            <h1 className={styles.nick_name}>Sant v7</h1>
        </div>

        {showMenu ? <ChartNoAxesGantt className={styles.menu_btn}
          onClick={handleMenu}
          size={37} color='white'/>
          : <Menu className={styles.menu_btn}
          color='white' onClick={handleMenu} size={37} /> }

         <nav className={`${styles.main_navbar} ${showMenu ? styles.open : ""}`}>
            <ul className={styles.ul_list}>
                <li ref={linkHomeRef}>
                    <a onMouseEnter={showHomeIcon}
                       onMouseMove={showHomeIcon}
                       onMouseOut={hiddenHomeIcon}
                       href="#">Home <House className={styles.icons_navbar_hover}
                       color={homeIcon} size={25} />
                    </a>
                </li>


                <li ref={linkSkillsRef}>    
                    <a  onMouseEnter={showSkillsIcon}
                       onMouseMove={showSkillsIcon}
                       onMouseOut={hiddenSkillsIcon} 
                       href="#">Skills <BrainCircuit
                       className={styles.icons_navbar_hover}
                       color={skillsIcon} size={26} />
                    </a>
                </li>

                <li ref={linkProjectRef}>
                    <a onMouseEnter={showProjectIcon}
                       onMouseMove={showProjectIcon}
                       onMouseOut={hiddenProjectIcon}
                       href="#">Projects <SquaresExclude
                       className={styles.icons_navbar_hover}
                       color={projectIcon} />
                    </a>
                </li>

                    <a onMouseEnter={showContactIcon}
                       onMouseMove={showContactIcon}
                       onMouseOut={hiddenContactIcon} 
                       href='#'
                       className={styles.contact_btn}>Contact 
                       <Headset className={styles.icons_navbar_hover}
                       color={contactIcon} />
                    </a>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Wellcome




