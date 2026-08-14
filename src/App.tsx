import Welcome from './components/Welcome/Welcome'
import './style/global.css'
import introBg from './assets/video/pixel_intro.mp4'
import { useEffect, useState } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutMe from './components/AboutMe/AboutMe'
import styles from './components/Welcome/welcome.module.css'
import Error404 from './components/error/Error404'
import Lenis from '@studio-freight/lenis'
import Project from './components/Projects/Project'
import Github from './components/github/Github';
import { FormationData } from './components/Formation/FormationData';
import Contact from './components/Contact/Contact';
import FormContactMe from './components/Form/FormContactMe';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isPageNotFound, setIsPageNotFound] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setIsPageNotFound(true)
    }
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    })

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const ctx = gsap.context(() => {
      gsap.fromTo('#welcome_msg_gsap', {
        y: -125,
        opacity: 0
      }, {
        duration: 1.35,
        opacity: 1,
        y: 0,
        ease: 'sine.out'
      })

      gsap.fromTo('#hi_there', {
        opacity: 0
      }, {
        delay: 1.45,
        duration: 1.21,
        opacity: 1,
        ease: 'power2.out',
      })        

      gsap.fromTo('.welcome_apresentation', {
        x: -110,
        opacity: 0
      }, {
        duration: 1.44,
        opacity: 1,
        x: 0,
        ease: 'power2.out'
      })    

      gsap.to("#bg-video", {
        scrollTrigger: {
          trigger: "#intro-video", 
          start: "top top",
          end: "bottom top", 
          scrub: true
        },
        y: 150,
        ease: "none"
      });

      const timeLine = gsap.timeline();

      timeLine.fromTo('#scroll_wellcome_gsap', 
        { y: -50, opacity: 0, scale: 1.5 }, 
        { y: 0, delay: 0.85, opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
      )
      
      timeLine.to('#scroll_wellcome_gsap', {
        y: 25,
        duration: 1.12, 
        repeat: -1,
        yoyo: true, 
        ease: 'power1.inOut'
      })
    })
    
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert(); 
    }
  }, [])
  
  const toolTipActive = () => { if (!showMenu) setIsHovered(true) }
  const toolTipAllowed = () => { setIsHovered(false) }

  return (
    <div>
      {isPageNotFound ? (
        <Error404 />
      ) : (
        <>
          <Welcome showMenu={showMenu} setShowMenu={setShowMenu} />
          
          <section id='intro-video'>
            <video preload='auto' autoPlay muted loop playsInline id='bg-video'>
              <source type='video/mp4' src={introBg}/>
            </video>
            
            <div id='welcome_msg'>
              <div className='intro_tag' id='hi_there'>👾 HI THERE!</div>
              <h1 id='welcome_msg_gsap'>Welcome to my <span id='port_shadow' className="portfolio">Portfolio</span></h1>

              <p className='welcome_apresentation' id='max_msg_ap'>Driven <span className="portfolio">Software Engineer</span> <span style={{color: "orange"}}>&</span> <span className="portfolio">Frontend Developer</span> combining modern <span id='opp'>engineering</span> principles with design to deliver clean, scalable, and <span id='opp'>impactful</span> web solutions.</p>
          
              <p className='welcome_apresentation'>🎮 Created by Sant in <span className="portfolio">2026</span>. Based in Brazil.</p>
            </div>

            <div className={styles.scroller_indicator}>
              <div className={`${styles['tooltip-message']} ${isHovered ? styles.visible : ''}`}>  
                Scroll down to learn more about this Frontend Software Engineer | Frontend Developer.
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
          <Github />
          <FormationData />
          <Contact />
          {/* <FormContactMe /> */}
        </>
      )}
    </div>
  )
}

export default App