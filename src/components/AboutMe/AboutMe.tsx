import { useEffect, useRef } from 'react'
import styles from './AboutMe.module.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const Who = useRef<HTMLHeadingElement>(null)
  const softwareEngineer = useRef<HTMLHeadingElement>(null)
  const developer = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.fromTo(Who.current, {
      opacity: 0.3,
      y: 60,
      scale: 0.8
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      scrollTrigger: {
        start: '80%',
        end: '30%',
        scrub: true

      }
    })
    return () => {ScrollTrigger.getAll().forEach((t) => t.kill())}
    
  }, [])


  return (
    <>
    <section className={styles['about_me']}>
      <div className={styles.apresentation}>
        <h1 ref={Who} id='gsap_wia'>Who I' am ??</h1>

        <h2 id='gsap_se'>Software Engineer</h2>
        <h2 id='gsap_fd'>Frontend Developer</h2>

              
      </div>
      
    </section>
    </>
  )
}

export default AboutMe