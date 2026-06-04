import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import oldPc from '../../assets/img/pcimg.png'
import  newPc from '../../../src/assets/video/new_pc.mp4'
import  robot from '../../../src/assets/video/bg_about_me.mp4'
import styles from './AboutMe.module.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const WhoRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

   const softwareEngineerRef = useRef<HTMLHeadingElement>(null)
  const developerRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.fromTo(WhoRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.55
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 45%',
        end: 'center 50%',
        scrub: true
      }
    })
    return () => {ScrollTrigger.getAll().forEach((t) => t.kill())}
    
  }, [])


  return (
    <>
    <section ref={sectionRef} className={styles['about_me']}>
      <div className={styles.apresentation}>
        <h1 ref={WhoRef} className={styles.gsap_wia}>Who I' am ??</h1>

        <h2 ref={softwareEngineerRef} id='gsap_se'>Software Engineer</h2>

        <h2 ref={developerRef} id='gsap_fd'>Frontend Developer</h2> 




        <section className={styles.identity}>
          <video className={styles.video_pc} preload='auto' autoPlay muted loop playsInline >
            <source src={newPc} type='video/mp4'/>
          </video>

           <video className={styles.robot} preload='auto' autoPlay muted loop playsInline >
            <source src={robot} type='video/mp4'/>
          </video>      
         
        </section>

         <div className={styles.old_pc}>
          <img src={oldPc} alt=" Old PC" />
        </div> 

              
      </div>
      
    </section>
    </>
  )
}

export default AboutMe