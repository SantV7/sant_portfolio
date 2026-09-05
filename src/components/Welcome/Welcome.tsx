import gsap from 'gsap';
import styles from './welcome.module.css'
import { Menu, Headset, House, SquaresExclude, BrainCircuit, ChartNoAxesGantt } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Importação das funções do Anime.js v4
import { splitText, animate, stagger } from 'animejs';

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
    const btnContactRef = useRef<HTMLAnchorElement | null>(null)

    const showHomeIcon = () => setHomeIcon('white')
    const hiddenHomeIcon = () => setHomeIcon('transparent')

    const showSkillsIcon = () => setSkillsIcon('white')
    const hiddenSkillsIcon = () => setSkillsIcon('transparent')
    
    const showProjectIcon = () => setProjectIcon('white')
    const hiddenProjectIcon = () => setProjectIcon('transparent')

    const showContactIcon = () => setContactIcon('white')
    const hiddenContactIcon = () => setContactIcon('transparent')

    useEffect(() => {
        // 1. Animações de entrada do GSAP
        const targets = [linkHomeRef.current, linkSkillsRef.current, linkProjectRef.current].filter(Boolean);
        
        const animLinks = gsap.fromTo(targets, {
            opacity: 0, scale: 0.3
        }, {
            opacity: 1, scale: 1,
            duration: 0.75, ease: 'power2', stagger: 0.05
        })

        const animContact = gsap.fromTo(btnContactRef.current, {     
             x: 50
        }, {
            x: 0, duration: 0.35, ease: 'power2'
        }) 

        // 2. Aplica o splitText individualmente para cada palavra da navbar
        const elements = document.querySelectorAll('.nav-split-text');
        const allChars: Element[] = [];

        elements.forEach((el) => {
          const { chars } = splitText(el, { chars: true });
          if (chars) {
            allChars.push(...chars);
          }
        });

        if (allChars.length > 0) {
          animate(allChars, {
            translateY: ['100%', '0%'],
            rotateZ: [4, 0],
            opacity: [0, 1],
            delay: stagger(30, { start: 380 }),
            duration: 600,
            easing: 'outBack'
          });
        }

        return () => {
            animLinks.kill()
            animContact.kill()
        }
    }, [])

  return (
    <>
    <header className={styles.main_header}>
        <div>
            <h1 className={styles.nick_name}>Sant v7</h1>
        </div>

        {showMenu ? <ChartNoAxesGantt className={styles.menu_btn} onClick={handleMenu} size={37} color='white'/>
          : <Menu className={styles.menu_btn} color='white' onClick={handleMenu} size={37} /> }

         <nav className={`${styles.main_navbar} ${showMenu ? styles.open : ""}`}>
            <ul className={styles.ul_list}>
                <li ref={linkHomeRef}>
                    <a onMouseEnter={showHomeIcon}
                       onMouseMove={showHomeIcon}
                       onMouseOut={hiddenHomeIcon}
                       href="#intro-video">
                       <span className="nav-split-text">Home</span>
                       <House className={styles.icons_navbar_hover} color={homeIcon} size={25} />
                    </a>
                </li>

                <li ref={linkSkillsRef}>    
                    <a onMouseEnter={showSkillsIcon}
                       onMouseMove={showSkillsIcon}
                       onMouseOut={hiddenSkillsIcon} 
                       href="#about_me_sec">
                       <span className="nav-split-text">About</span>
                       <BrainCircuit className={styles.icons_navbar_hover} color={skillsIcon} />
                    </a>
                </li>

                <li ref={linkProjectRef}>
                    <a onMouseEnter={showProjectIcon}
                       onMouseMove={showProjectIcon}
                       onMouseOut={hiddenProjectIcon}
                       href="#project_area">
                       <span className="nav-split-text">Projects</span>
                       <SquaresExclude className={styles.icons_navbar_hover} color={projectIcon} />
                    </a>
                </li>

                <a ref={btnContactRef} 
                   onMouseEnter={showContactIcon}
                   onMouseMove={showContactIcon}
                   onMouseOut={hiddenContactIcon} 
                   href='#contact_sect_href'
                   className={styles.contact_btn}>
                   <span className="nav-split-text">Contact</span>
                   <Headset className={styles.icons_navbar_hover} color={contactIcon} />
                </a>
            </ul>
         </nav>
    </header>
    </>
  )
}

export default Wellcome