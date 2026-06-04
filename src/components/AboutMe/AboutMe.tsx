import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import oldPc from '../../assets/img/pcimg.png'
import newPc from '../../../src/assets/video/new_pc.mp4'
import teclado_pixel from '../../assets/img/teclado.png'

import styles from './AboutMe.module.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const WhoRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)


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
        <h1 ref={WhoRef} className={styles.gsap_wia}>Sant v7</h1>
          <img className={styles.old_pc} src={oldPc} alt=" Old PC" />

          <img className={styles.keyboard_pixel} src={teclado_pixel} alt="Teclado" />
      </div>


<div className={styles.container_card}>
        <div className={styles.about_me_card}>
          <header>
            <h2>Vinícius</h2>
            <h3>Level 18</h3>
          </header>
  
          <div className={styles.main_info}>
            <img src="photo anime" alt="photo anime" />
            <section className={styles.personal_data}>
              <p className={styles.data_paragraph}>First Name: Vinícius</p>
              <p className={styles.data_paragraph}>Last Name: Santos Oliveira</p>
              <p className={styles.data_paragraph}>Age: 18</p>
              <p className={styles.data_paragraph}>Profession: Software Engineer</p>
              <p className={styles.data_paragraph}>Stack: Font-end</p>
  
              <footer className={styles.info_card_footer}>
                <p className={styles.data_paragraph}>Status: Active</p>
                <button className={styles.more_info}>More</button>
              </footer>
            </section>
          </div>
  
          <div className={styles.grid_template}>
            <div className="digital"></div>
            <div className="city-bsb"></div>
            <article className={styles.text_about_me}></article>
          </div>
  
          <div >
              <video className={styles.video_pc} preload='auto' autoPlay muted loop playsInline >
                <source src={newPc} type='video/mp4'/>
              </video>
          </div>
        </div>
</div>
      
    </section>
    </>
  )
}

export default AboutMe