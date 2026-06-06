import Welcome from './components/Welcome/Welcome'
import './style/global.css'
import secondIntro from './assets/video/background_pixel.mp4'
import thirdIntro from './assets/video/pixel_two.mp4'
import firstIntro from './assets/video/pixel_three.mp4'
import { ArrowBigLeftDash } from 'lucide-react';
import { ArrowBigRightDash } from 'lucide-react';
import { useEffect, useState } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutMe from './components/AboutMe/AboutMe'
import styles from './components/Welcome/welcome.module.css'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const video = [firstIntro, secondIntro, thirdIntro]
  const [indexVideo, setIndexVideo] = useState<number>(0)
  const [isHovered, setIsHovered] = useState(false);

  const prevBackground = () => setIndexVideo((prevIndex) => (prevIndex - 1 + video.length) % video.length)
  const nextBackground = () => setIndexVideo((prevIndex) => (prevIndex + 1) % video.length)

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

    gsap.fromTo('#wellcome_msg', {
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
        end: "bottom top",
        scrub: true
      },
      y: 150,
      ease: "none"
    });

    gsap.fromTo(`.${styles['change-bg']}`, 
      { y: 40,
        scale: 0,
        opacity: 0 }, 
      { y: 0,
        scale: 1,
        duration: 1.5,
        opacity: 1,
        ease: 'power2.out' }
    )

    const timeLine = gsap.timeline();

    timeLine.fromTo('#scroll_wellcome_gsap', 
      { y: -50, opacity: 0, scale: 2 }, 
      { y: 0, delay: 1.35, opacity: 1,
      scale: 1, duration: 1.2, ease: "power2.out" }
    )
    
    timeLine.to('#scroll_wellcome_gsap', {
      y: 25,
      duration: 1.7,
      repeat: -1,
      yoyo: true,
      ease: 'linear'
    })
    
    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  }, [])

  const toolTipActive = () => { if (!showMenu) setIsHovered(true) }
  const toolTipAllowed = () => { setIsHovered(false) }

  return (
    <>
      <Welcome showMenu={showMenu} setShowMenu={setShowMenu} />
      
      <section id='intro-video'>
        <video key={indexVideo} preload='auto' autoPlay muted loop playsInline id='bg-video'>
          <source type='video/mp4' src={video[indexVideo]}/>
        </video>
        
        <div id='area_arrow'>
          <ArrowBigLeftDash onClick={prevBackground} className={styles['change-bg']} size={45} color='white'/>
          <ArrowBigRightDash onClick={nextBackground} className={styles['change-bg']} size={45} color='white'/>
        </div>

        <div id='welcome_msg'>
          <h1>Welcome to my <span id="portfolio">Portfolio</span></h1>
          <p>This is a apresentation from a begginer software engineer</p>
        </div>

        <div className={styles.scroller_indicator}>
          <div className={`${styles['tooltip-message']} ${isHovered ? styles.visible : ''}`}>  
            Scroll down to learn more about this Frontend Software Engineer.
          </div>

          <h1 className={styles.scroll_wellcome} 
              onMouseEnter={() => toolTipActive()} 
              onMouseLeave={() => toolTipAllowed()}>
            Scroll Down
          </h1>
        </div>
      </section>

      <AboutMe />
    </>
  )
}

export default App