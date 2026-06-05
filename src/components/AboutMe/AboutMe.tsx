import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import oldPc from '../../assets/img/pcimg.png'
import newPc from '../../../src/assets/video/new_pc.mp4'
import { CircleX } from 'lucide-react';
import { Download } from 'lucide-react';
import styles from './AboutMe.module.css'
import photo_anime from '../../assets/img/photo_anime.png'
import { ScanEye } from 'lucide-react';
import robot from '../../assets/video/bg_about_me.mp4'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const WhoRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const [curriculumActive, setCurriculumActive] = useState<boolean>(false)
  const [seeMore, setSeeMore] = useState<boolean>(false)

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
        start: 'top 85%',
        end: 'center 50%',
        scrub: true
      }
    })
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <section ref={sectionRef} className={styles['about_me']}>
      <div className={styles.apresentation}>
        <h1 ref={WhoRef} className={styles.gsap_wia}>Sant</h1>
        <img className={styles.old_pc} src={oldPc} alt="Old PC" />
        
      </div>

      <div className={styles.container_card}>
        <div className={styles.about_me_card}>
      
          <header className={styles.card_header}>
            <div className={styles.header_text}>
              <h2>PERSONAL RECORD SYSTEM</h2>
              <span className={styles.serial}>■ 5195028</span>
            </div>
            <div className={styles.header_status}>
              <p>STANDBY</p>
              <p>CONNECTION ESTABLISHED IN 2026</p>
            </div>
          </header>

          <div className={styles.main_layout}>
            <aside className={styles.sidebar}>
              <div className={styles.side_buttons}>
                <button className={styles.hud_btn}>ID: 2007</button>
                <button className={styles.hud_btn}>ARCHIVE</button>
              </div>
              <div className={styles.photo_frame}>
                <img src={photo_anime} alt="photo anime" />
                <video preload='auto' autoPlay muted loop playsInline>
                  <source type='video/mp4' src={robot}/>
                </video>
              </div>
            </aside>
            
            <section className={styles.personal_data}>
              <div className={styles.data_grid}>
                <p><span>First Name:</span> Vinícius</p>
                <p><span>Last Name:</span> Santos Oliveira</p>
                <p><span>Age:</span> 18y</p>
                <p><span>Profession:</span> Software Engineer</p>
                <p><span>Stack:</span> Front-End</p>

                  {seeMore && (
                    <>
                      <p><span>NickName:</span>Sant | Aivy | Vy</p>
                      <p><span>Favorite Games:</span>The Last Of Us / Uncharted / Fortnite / Valorant / Warzone...</p>
                      <p><span>Front-End:</span>HTML, CSS, SCSS, Tailwind CSS, JavaScript, TypeScript, React, UI/UX, Figma, Gsap, Git, GitHub...</p>
                      <p><span>Favorite Anime:</span> Tokyo Ghoul </p>
                      <p><span>Height:</span> 5'10</p>     
                      <p><span>Hair Color:</span> 5'10</p>  
                      <p><span>Eye Color:</span> 5'10</p> 
                      <p><span>Dominant Hand:</span> 5'10</p>  
                      <p><span>Weight:</span> 143 lbs</p> 
                      <p><span>Learning Goals:</span>Frontend: Angular, Next.js.| Backend: Java, Kotlin. | API & Query Languages: GraphQL. | Testing: Jest</p>  
                      <p></p>  
                      <p><span>IDE:</span>Visual Studio Code</p>  

                                 
                    </>
                  )}
              </div>


              <footer className={styles.info_card_footer}>
                <p className={styles.status_bar}>Status: Active</p>
                <div className={styles.footer_btns}>
                   <button onClick={() => setCurriculumActive(true)} className={styles.hud_btn_sm}>CURRICULUM</button>
                   <button onClick={() => setSeeMore(true)} className={styles.hud_btn_sm}>MORE</button>
                   { seeMore && (
                    <button onClick={() => setSeeMore(false)} className={styles.hud_btn_sm}>CLOSE MORE INFO <CircleX /></button>
                   )}
                   
                </div>


                { curriculumActive && (
                  <div>
                    <button className={styles.hud_btn_sm}>Download <Download /></button>
                    <button className={styles.hud_btn_sm}>Show <ScanEye /></button>
                     <br />
                    <button onClick={() => setCurriculumActive(false)} className={styles.hud_btn_sm}>CLOSE CURRICULUM <CircleX /></button>
                  </div>
                )
                }
              </footer>
            </section>
          </div>

          <div className={styles.video_container}>
            <video className={styles.video_pc} preload='auto' autoPlay muted loop playsInline>
              <source src={newPc} type='video/mp4' />
            </video>
            <p className={styles.eye_issues}>Developing vision issues</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe


