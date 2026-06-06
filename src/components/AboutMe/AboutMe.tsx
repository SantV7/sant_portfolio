import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import oldPc from '../../assets/img/pcimg.png'
import newPc from '../../../src/assets/video/new_pc.mp4'
import { CircleX } from 'lucide-react';
import { Download } from 'lucide-react';
import { MailOpen } from 'lucide-react';
import { ListTree } from 'lucide-react';
import styles from './AboutMe.module.css'
import { Workflow } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import photo_anime from '../../assets/img/photo_anime.png'
import { ScanEye } from 'lucide-react';
import { HardDriveDownload } from 'lucide-react';
import { CircleEllipsis } from 'lucide-react';
import { X } from 'lucide-react';
import { Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import curriculumDownload from '../../assets/curriculum/vinicius_software_engineer.pdf'


gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const WhoRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const [curriculumActive, setCurriculumActive] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [downloadIcon, setDownloadIcon] = useState<boolean>(false)
  const [closeIcon, setCloseIcon] = useState<boolean>(false)
  const [curriculumSetter, setCurriculumSetter] = useState<string>('gray')
  const [showCurriculum, setShowCurriculum] = useState<boolean>(false)
  const [emailIcon, setEmailIcon] = useState<boolean>(false)
  

  useEffect(() => {
    gsap.fromTo(WhoRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.55
    }, {
      opacity: 1,
      y: 0, scale: 1,
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
              </div>


              { showMore && (
                <> 
               <section className={styles.contact_more}>
                <h3 className={styles.more_data_sidebar}></h3>
                <p>Brasília, Brazil</p>
                <a onMouseEnter={() => setEmailIcon(true)} onMouseOut={() => setEmailIcon(false)} href="mailto:3izuna@gmail.com"> { emailIcon ? <MailOpen /> : <Mail />}Email</a>
                <a href="https://github.com/SantV7" target='_blank'><FaGithub /> GitHub</a>
                <a href="https://www.linkedin.com/in/viniciussant07" target='_blank'> <FaLinkedin /> LinkedIn</a>
                <a href="https://www.instagram.com/__sant_v/" target='_blank'> <FaInstagram /> Instagram</a>
                <a href="https://portfolio-santv7.vercel.app/" target='_blank'>Last Portfolio</a>
               </section>

               <section className={styles.contact_more}>
                <h3 className={styles.more_data_sidebar}>Education</h3>
                <h4>Associate Degree in Systems Analysis and Development</h4>
                <p>Universidade Católica de Brasília</p>
                <p>Expected graduation: 2028</p>               
               </section>

               <section className={styles.contact_more}>
                <h3 className={styles.more_data_sidebar}>Design & UX Skills</h3>
                <div>
                  <div>Figma</div>
                  <div>UI Design</div>
                  <div>UX Design</div>
                </div>
               </section>
               </>
              )}
            </aside>
            
            <section className={styles.personal_data}>
              <div className={styles.data_grid}>
                <p><span>First Name:</span> Vinícius</p>
                <p><span>Last Name:</span> Santos Oliveira</p>
                <p><span>Age:</span> 18y</p>
                <p><span>Profession:</span> Software Engineer</p>
                <p><span>Stack:</span> Front-End</p>

                  {showMore && (
                    <>
                      <p><span>NickName:</span>Sant | Aivy | Vy</p>
                      <p><span>Favorite Games:</span>The Last Of Us / Uncharted / Fortnite / Valorant / Warzone...</p>
                      <p><span>Front-End:</span>HTML, CSS, SCSS, Tailwind CSS, JavaScript, TypeScript, React, UI/UX, Figma, Gsap, Git, GitHub...</p>
                      <p><span>Favorite Anime:</span> Tokyo Ghoul </p>
                      <p><span>Height:</span> 5'10</p>     
                      <p><span>Hair Color:</span>Dark Brown</p>  
                      <p><span>Eye Color:</span>Dark Brown</p> 
                      <p><span>Dominant Hand:</span> Right-Handed</p>  
                      <p><span>Weight:</span> 143 lbs</p> 
                      <p><span>Learning Goals:</span> Frontend (Angular, Next.js), Backend (Java, Kotlin), APIs (GraphQL), Testing (Jest)</p>  
                      <p></p>  
                      <p><span>IDE:</span>Visual Studio Code</p>  
                    </>
                  )}

                  {showMore && (
                    <>
                    <div className={styles.about_me_txt}>
                      <div>
                        <div className={styles.about_me_title}>
                          <ListTree />
                          <h3 className={styles.more_data_sidebar}>ABOUT ME</h3>
                        </div>
                      </div>
                    </div>

                    <div className={styles.more_data_flex}>
                      <div>
                        <h3 className={styles.more_data_sidebar}><CodeXml /> TECHNICAL SKILLS</h3>
                        <div>
                          <h4>■ Language:</h4>
                          <p>JavaScript, TypeScript, HTML5, CSS3</p>

                          <h4>■ Libraries and Frameworks:</h4>
                          <p>React, Tailwind CSS, Sass & SCSS</p>      

                          <h4>■ Animation and UI:</h4>
                          <p>UI/UX Desing Principles, Figma</p> 

                          <h4>■ Tools and Workflow:</h4>
                          <p>Git, Github, REST APIs, Resposive Web Developement</p>       

                          <h4>■ Language:</h4>
                          <p>Portuguese - Native</p>   
                          <p>English - Intermediate</p>   

                          <p>■ Agile Methodologies:</p>   
                          <p>Scrum, Kanban</p>            
                        </div>
                        
                      </div>

                      <div className={styles.more_data_projects}>
                        <h3 className={styles.more_data_sidebar}><CodeXml /> PROJECTS</h3>
                      </div>
                      <div></div>
                    </div>
                    
                    </>
                  )}
              </div>


              <footer className={styles.info_card_footer}>
                <div className={styles.footer_btns}>
                   <button onClick={() => setCurriculumActive(true)} onMouseEnter={() => setCurriculumSetter('white')} className={styles.hud_btn_sm}>CURRICULUM <Workflow color={curriculumSetter} size={29}/></button>
                   <button onClick={() => setShowMore(true)} className={styles.hud_btn_sm}>MORE <CircleEllipsis size={30} /></button>
                   { showMore && (
                    <button onMouseEnter={() => setCloseIcon(true)} onMouseOut={() => setCloseIcon(false)} onClick={() => setShowMore(false)} className={styles.hud_btn_sm}>SHOW LESS {closeIcon ? <X  size={38}/> : <CircleX  size={38} />}</button>
                   )}
                   
                </div>


                { curriculumActive && (
                  <div className={styles.sidebar_curriculum}>
                    <a href={curriculumDownload} download="Vinicius_Software_Engineer.pdf" onMouseEnter={() => setDownloadIcon(true)} onMouseOut={() => setDownloadIcon(false)} className={styles.hud_btn_sm}>Download {downloadIcon ? <HardDriveDownload /> : <Download/>}</a>
                    <button onClick={() => setShowCurriculum(!showCurriculum)} className={styles.hud_btn_sm}>Show <ScanEye /></button>
                     <br />
                    <button onClick={() => setCurriculumActive(false)} className={styles.hud_btn_sm}>CLOSE THE RESUME <CircleX size={30}/></button>
                  </div>
                 )
                }

                {showCurriculum && (
                  <div >
             
                  </div>
                )}
              </footer>
            </section>
          </div>

          <div className={styles.video_container}>
            <video className={styles.video_pc} preload='auto' autoPlay muted loop playsInline>
              <source src={newPc} type='video/mp4' />
            </video>
            <p className={styles.eye_issues}>DEVELOPING VISION ISSUES</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe


