import Welcome from './components/Welcome/Welcome'
import './style/global.css'

import firstIntro from './assets/video/pixel_three.mp4'
import { ArrowBigLeftDash } from 'lucide-react';
import { ArrowBigRightDash } from 'lucide-react';
import { useEffect, useState } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutMe from './components/AboutMe/AboutMe'
import styles from './components/Welcome/welcome.module.css'
import Error404 from './components/error/Error404'
import Lenis from '@studio-freight/lenis'
import Project from './components/Projects/Project'

gsap.registerPlugin(ScrollTrigger);

function App() {

  const[isPageNotFound, setIsPageNotFound] = useState<Boolean>(false)

  useEffect(() => {
    if(window.location.pathname !== '/') {
      setIsPageNotFound(true)
    }
  }, [])


  const [showMenu, setShowMenu] = useState<boolean>(false)

  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    gsap.fromTo('#welcome_msg_gsap', {
      y: -140,
      opacity: 0
    }, {
      duration: 1.2,
      opacity: 1,
      y: 0,
      ease: 'power2'
    })

    gsap.fromTo('.welcome_apresentation', {
      x: -110,
      opacity: 0
    }, {
      duration: 1.5,
      opacity: 1,
      x: 0,
      ease: 'power2'

    })    

    gsap.fromTo('.scroll_wellcome', {
      y: -140,
      opacity: 0
    }, {
      duration: 1.6,
      opacity: 1,
      y: 0,
      ease: 'power2'
    })

    gsap.to("#bg-video", {
      scrollTrigger: {
        trigger: "#intro-video", 
        start: "top top",
        end: "bottom top", scrub: true
      },
      y: 150,
      ease: "none"
    });

    gsap.fromTo(`.${styles['change-bg']}`, 
      { y: 40,
        scale: 0,
        opacity: 0 }, 
      { y: 0,
        scale: 1, duration: 1.5,
        opacity: 1, ease: 'power2.out' }
    )

    const timeLine = gsap.timeline();

    timeLine.fromTo('#scroll_wellcome_gsap', 
      { y: -50, opacity: 0, scale: 2 }, 
      { y: 0, delay: 0.85, opacity: 1,
      scale: 1, duration: 1.2, ease: "power2.out" }
    )
    
    timeLine.to('#scroll_wellcome_gsap', {
      y: 40,
      duration: 1.4, repeat: -1,
      yoyo: true, ease: 'linear'
    })
    
    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  }, [])

  const toolTipActive = () => { if (!showMenu) setIsHovered(true) }
  const toolTipAllowed = () => { setIsHovered(false) }



  
  return (
    <div>
      {isPageNotFound ? (
        <Error404 />
      ): (

    <>
      <Welcome showMenu={showMenu} setShowMenu={setShowMenu} />
      
      <section id='intro-video'>
        <video preload='auto' autoPlay muted loop playsInline id='bg-video'>
          <source type='video/mp4' src={firstIntro}/>
        </video>
        
        <div id='area_arrow'>
          <ArrowBigLeftDash className={styles['change-bg']} size={45} color='transparent'/>
          <ArrowBigRightDash className={styles['change-bg']} size={45} color='transparent'/>
        </div>

        <div id='welcome_msg'>
          <h1 id='welcome_msg_gsap'>Welcome to my <span className="portfolio">Portfolio</span></h1>
          <p className='welcome_apresentation'>This is a presentation from a beginner <span className="portfolio">Software Engineer.</span></p>
          <p className='welcome_apresentation'>Created by Sant in <span className="portfolio">2026</span>.</p>
        </div>

        <div className={styles.scroller_indicator}>
          <div className={`${styles['tooltip-message']} ${isHovered ? styles.visible : ''}`}>  
            Scroll down to learn more about this Frontend Software Engineer.
          </div>

          <h1 id='scroll_wellcome_gsap' className={styles.scroll_wellcome} 
            onMouseEnter={() => toolTipActive()} 
            onMouseLeave={() => toolTipAllowed()}>
            Scroll Down
          </h1>
        </div>
      </section>

      <AboutMe />
      <Project />
    </>
          )}
    </div>
  )
}


export default App