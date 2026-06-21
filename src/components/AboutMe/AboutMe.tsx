import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// REMOVIDO: ScanEye do import abaixo
import { 
  CircleX, Download, MailOpen, ListTree, Workflow, Info, GlobeOff, CodeXml, HardDriveDownload, CircleEllipsis, X, Mail 
} from 'lucide-react'
import { HiLocationMarker } from "react-icons/hi"
import { FaInstagram, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaFigma } from "react-icons/fa"
import { SiTypescript, SiTailwindcss } from "react-icons/si"
import { MdOutlineDesignServices, MdOutlineDevices } from "react-icons/md" 
import notebookImg from '../../assets/img/notebook.jpeg'
import oldPc from '../../assets/img/pcimg.png'
import newPc from '../../../src/assets/video/new_pc.mp4'
import photo_anime from '../../assets/img/photo_anime.png'
import curriculumDownload from '../../assets/curriculum/vinicius_software_engineer.pdf'
import styles from './AboutMe.module.css'

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
  const [moreCurriculum, setMoreCurriculum] = useState<boolean>(false)

  const container_scroll = useRef<HTMLDivElement | null>(null)
  const btn_archieve_one = useRef<HTMLButtonElement | null>(null)
  const btn_archieve_two = useRef<HTMLButtonElement | null>(null)
  const pczin = useRef<HTMLImageElement | null>(null)
  const recordRef = useRef<HTMLHeadingElement| null>(null)
  const numId = useRef<HTMLSpanElement| null>(null) 
  const standyRef = useRef<HTMLDivElement| null>(null) 
  const imgRef = useRef<HTMLDivElement | null>(null)

  const p1_g = useRef<HTMLParagraphElement | null>(null)
  const p2_g = useRef<HTMLParagraphElement | null>(null)
  const contactRef = useRef<HTMLDivElement| null>(null)
  const linksContainerRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(pczin.current, {
        rotate: 90,
        scale: 0.6
      }, {
        rotate: 0,
        ease: 'power2.out',
        duration: 1.6,
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 63%',
          end: 'center 80%'
        }
      })

      gsap.fromTo(btn_archieve_one.current, {
        scale: 0.6,
        opacity: 0,
        y: 40
      }, {
        ease: 'power2.out',
        duration: 0.3,
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: container_scroll.current,
          start: 'top 51%',
          end: 'center 50%',
          scrub: true
        }
      })

      gsap.fromTo(recordRef.current, {
        opacity: 0,
        x: -30
      }, {
        ease: 'power2.out',
        duration: 0.5,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: container_scroll.current,
          start: 'top 68%',
          end: 'center 50%',
          scrub: true
        }
      })      

      gsap.fromTo(numId.current, {
        opacity: 0,
        y: 20
      }, {
        ease: 'power2.out',
        duration: 0.5,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: container_scroll.current,
          start: 'top 68%',
          end: 'center 50%',
          scrub: true
        }
      })   

      gsap.fromTo(btn_archieve_two.current, {
        scale: 0.6,
        opacity: 0,
        y: 40
      }, {
        ease: 'power2.out',
        duration: 0.37,
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: container_scroll.current,
          start: 'top 51%',
          end: 'center 50%',
          scrub: true
        }
      })   

      gsap.fromTo(standyRef.current, {
        scale: 0.87,
        opacity: 0,
        x: 40
      }, {
        ease: 'power2.out',
        duration: 0.55,
        x: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: container_scroll.current,
          start: 'top 68%',
          end: 'center 50%',
          scrub: true
        }
      })      

      gsap.fromTo(imgRef.current, {
        scale: 0.35,
        opacity: 0,
        y: 20
      }, {
        ease: 'power2.out',
        duration: 0.55,
        x: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: container_scroll.current,
          start: 'top 80%',
          end: 'center 30%',
          scrub: true
        }
      })   
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!showMore) return

    const ctx = gsap.context(() => {
      gsap.fromTo(p1_g.current, {
        opacity: 0,
        x: -30
      }, {
        ease: 'power2.out',
        duration: 0.55,
        x: 0,
        opacity: 1
      }) 

      gsap.fromTo(p2_g.current, {
        opacity: 0,
        x: -35
      }, {
        ease: 'power2.out',
        duration: 0.65,
        x: 0,
        opacity: 1
      }) 

      gsap.fromTo(aboutRef.current, {
        scale: 0.6,
        opacity: 0,
        y: 100
      }, {
        ease: 'power2.out',
        duration: 0.65,
        y: 0,
        scale: 1,
        opacity: 1
      }) 
    }, sectionRef)

    return () => ctx.revert()
  }, [showMore])

  useEffect(() => {
    if (!moreCurriculum || !linksContainerRef.current) return

    const ctx = gsap.context(() => {
      const container = linksContainerRef.current
      if (!container) return

      const targets = container.querySelectorAll(`.${styles.links_reference}`)
      const icons = container.querySelectorAll('svg')

      const tl = gsap.timeline()

      if (icons.length > 0) {
        tl.fromTo(icons, {
          opacity: 0,
          x: -15
        }, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power1.out',
          strainer: 0.08
        })
      }

      if (targets.length > 0) {
        tl.fromTo(targets, {
          opacity: 0,
          x: -10
        }, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power1.out',
          stagger: 0.05
        }, icons.length > 0 ? "-=0.3" : "<")
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [moreCurriculum])

  return (
    <section ref={sectionRef} className={styles['about_me']}>
      <div className={styles.apresentation}>
        <h1 ref={WhoRef} className={styles.gsap_wia}>Sant's <br />information</h1>
        <img ref={pczin} className={styles.old_pc} src={oldPc} alt="Old PC" />
      </div>

      <div className={styles.container_card}>
        <div ref={container_scroll} className={styles.about_me_card}>
          <header className={styles.card_header}>
            <div className={styles.header_text}>
              <h2 ref={recordRef}>PERSONAL RECORD SYSTEM</h2>
              <span ref={numId} className={styles.serial}>■ 5195028</span>
            </div>
            <div ref={standyRef} className={styles.header_status}>
              <p>STANDBY</p>
              <p>CONNECTION ESTABLISHED IN 2026</p>
            </div>
          </header>

          <div className={styles.main_layout}>
            <aside className={styles.sidebar}>
              <div className={styles.side_buttons}>
                <button ref={btn_archieve_one} className={styles.hud_btn}>ID: 2007</button>
                <button ref={btn_archieve_two} className={styles.hud_btn}>ARCHIVE</button>
              </div>
              <div ref={imgRef} className={styles.photo_frame}>
                <img src={photo_anime} alt="photo anime" />
              </div>

              {moreCurriculum && (
                <div className={styles.more_all_data}>
                  <section ref={linksContainerRef} className={styles.contact_more}>
                    <h3 className={styles.more_data_title}><Info size={19} color='orange'/> CONTACT</h3>
                    <p className={styles.links_reference}>
                      <HiLocationMarker color="#dabeff" size={25}/> Brasília, Brazil
                    </p>
                    <a 
                      className={styles.links_reference}  
                      onMouseEnter={() => setEmailIcon(true)}
                      onMouseLeave={() => setEmailIcon(false)}
                      href="mailto:3izuna@gmail.com"> 
                      {emailIcon ? <MailOpen color="#b2c9ff" size={23}/> : <Mail color="#b2c9ff" size={23}/>} Email
                    </a>
                    <a className={styles.links_reference} href="https://github.com/SantV7" target='_blank' rel="noreferrer">
                      <FaGithub color="#b2c9ff" size={23}/> GitHub
                    </a>
                    <a className={styles.links_reference} href="https://www.linkedin.com/in/viniciussant07" target='_blank' rel="noreferrer">
                      <FaLinkedin color="#b2c9ff" size={23}/> LinkedIn
                    </a>
                    <a className={styles.links_reference} href="https://www.instagram.com/__sant_v/" target='_blank' rel="noreferrer">
                      <FaInstagram color="#b2c9ff" size={23}/> Instagram
                    </a>
                    <a id={styles.m_last} className={styles.links_reference} href="https://portfolio-santv7.vercel.app/" target='_blank' rel="noreferrer">
                      <GlobeOff color="#b2c9ff" size={23} /> Last Portfolio
                    </a>
                  </section>

                  <section ref={contactRef} className={styles.contact_more}>
                    <h3 className={styles.more_data_title}><Info size={19} color='orange'/> Education</h3>
                    <h4 className={styles.format_txt}>Associate Degree in Systems Analysis and Development</h4>
                    <p ref={p1_g} className={styles.format_txt}>Universidade Católica de Brasília</p>
                    <p ref={p2_g} id={styles.expected} className={styles.format_txt}>Expected graduation: 2028</p>
                  </section>

                  <section className={styles.contact_more}>
                    <h3 className={styles.more_data_title}><Info size={19} color='orange'/> Design & UX Skills</h3>
                    <div className={styles.design_area_icons}>
                      <div>
                        <p className={styles.format_txt}><FaFigma size={31} color="#F24E1E" /> Figma</p>
                      </div>
                      <div>
                        <p className={styles.format_txt}><MdOutlineDesignServices size={33} color="#a3c9d1" /> UI Design</p>
                      </div>
                      <div>
                        <p className={styles.format_txt}><MdOutlineDevices size={30} color="#a3c9d1" /> UX Design</p>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </aside>
            
            <section className={styles.personal_data}>
              <div className={styles.data_grid}>
                <p><span>Player:</span> Vinícius</p>
                <p><span>Last Name:</span> Santos Oliveira</p>
                <p><span>Age:</span> 18y</p>
                <p><span>Profession:</span> Software Engineer</p>
                <p><span>Stack:</span> Front-End</p>

                {showMore && (
                  <>
                    <p><span>NickName:</span>Sant | Aivy | Vy</p>
                    <p><span>Favorite Games:</span>The Last Of Us / Uncharted / Fortnite / Valorant / Warzone...</p>
                    <p><span>Front-End:</span>HTML, CSS, SCSS, Tailwind CSS, JavaScript, TypeScript, React, UI/UX, Figma, GSAP, Git, GitHub...</p>
                    <p><span>Favorite Anime:</span> Tokyo Ghoul </p>
                    <p><span>Height:</span> 5'10</p>     
                    <p><span>Hair Color:</span>Dark Brown</p>  
                    <p><span>Eye Color:</span>Dark Brown</p> 
                    <p><span>Dominant Hand:</span> Right-Handed</p>  
                    <p><span>Weight:</span> 143 lbs</p> 
                    <p><span>Mother:</span> Maria</p> 
                    <p><span>Father:</span> José</p> 
                    <p><span>Learning Goals:</span> Frontend (Angular, Next.js), Backend (Java, Kotlin), APIs (GraphQL), Testing (Jest)</p>  
                    <p></p>  
                    <p><span>IDE:</span>Visual Studio Code</p>  
                  </>
                )}

                {moreCurriculum && (
                  <div id={styles.about_me_area} className={styles.box_info}>
                    <div ref={aboutRef} className={styles.about_me_title}>
                      <header>
                        <h3 id={styles.about_title} className={styles.more_data_title}> <ListTree /> ABOUT ME</h3>
                      </header>
                      <p>
                        Frontend Software Engineer with 2 years of experience in the frontend stack, specializing in React,
                        JavaScript, and Modern CSS, Sass/SCSS. I create fluid animations and engaging visual experiences using GSAP.
                        Committed to Clean Code principles, I maintain a critical, analytical approach to problem-solving. I am experienced
                        in seamless REST API integration, version control with Git/GitHub, and collaborative project management. Additionally,
                        I leverage my UI/UX Design knowledge and Figma skills to optimize layouts for both performance and aesthetics.
                      </p>
                    </div>

                    <div className={styles.format_icons_about_me}>
                      <h3 id={styles.tech_design_title} className={styles.more_data_title}> {'>_'}Technologies & design tools</h3>
                      <div className={styles.all_icons}>
                        <div className={styles.format_icons_skills}><FaHtml5 size={30} color="#E34F26" /> HTML5</div>
                        <div className={styles.format_icons_skills}><FaCss3Alt size={30} color="#1572B6" /> CSS3</div>
                        <div className={styles.format_icons_skills}><SiTailwindcss size={30} color="#06B6D4" /> Tailwind</div>
                        <div className={styles.format_icons_skills}><FaSass size={30} color="#CC6699" /> SCSS</div>
                        <div className={styles.format_icons_skills}><FaReact size={30} color="#61DAFB" /> React</div>
                        <div className={styles.format_icons_skills}><SiTypescript size={28} color="#3178C6" /> TypeScript</div>
                        <div className={styles.format_icons_skills}><FaJs size={30} color="#F7DF1E" /> JavaScript</div>
                        <div className={styles.format_icons_skills}><MdOutlineDesignServices size={30} color="#a3c9d1"/> UI Design</div>
                        <a target='_blank' href='https://github.com/SantV7' className={styles.format_icons_skills} rel="noreferrer">
                          <FaGithub size={30} color="#FFFFFF" /> GitHub
                        </a>
                        <div className={styles.format_icons_skills}><FaFigma size={28} color="#F24E1E" /> Figma</div>
                        <div className={styles.format_icons_skills}><MdOutlineDevices size={30} color="#a3c9d1" /> UX Design</div>
                      </div>
                    </div>
                  </div>
                )}

                {moreCurriculum && (
                  <div className={styles.more_data_flex}>
                    <div id={styles.technical_box} className={styles.box_info}>
                      <header>
                        <h3 id={styles.technical_title} className={styles.more_data_title}><CodeXml /> TECHNICAL SKILLS</h3>
                      </header>
                      <div className={styles.flex_skills}>
                        <div className={styles.skills_first}>
                          <h4>■ Languages:</h4>
                          <p>- JavaScript, TypeScript, HTML5, CSS3</p>
                        </div>
                        <div className={styles.skills_first}>
                          <h4>■ Libraries and Frameworks:</h4>
                          <p>- React, Tailwind CSS, Sass & SCSS</p>
                        </div>      
                        <div className={styles.skills_first}>
                          <h4>■ Animation and UI:</h4>
                          <p>- UI/UX Design Principles, Figma</p>
                        </div>
                        <div className={styles.skills_first}>
                          <h4>■ Tools and Workflow:</h4>
                          <p>- Git, GitHub, REST APIs, Responsive Web Development</p>
                        </div>      
                        <div className={styles.skills_first}>
                          <h4>■ Spoken Languages:</h4>
                          <p>- Portuguese - Native</p>
                          <p>- English - Intermediate</p>
                        </div>  
                        <div className={styles.skills_first}>
                          <h4>■ Agile Methodologies:</h4>
                          <p>- Scrum, Kanban</p>
                        </div>           
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <footer className={styles.info_card_footer}>
                <div className={styles.footer_btns}>
                  <button onClick={() => setCurriculumActive(true)} onMouseEnter={() => setCurriculumSetter('white')} className={styles.hud_btn_sm}>
                    CURRICULUM <Workflow color={curriculumSetter} size={29}/>
                  </button>

                  <button onClick={() => {
                    setMoreCurriculum(!moreCurriculum)
                    setShowMore(!moreCurriculum)
                  }} className={styles.hud_btn_sm}>
                    {moreCurriculum ? 'CLOSE' : 'MORE'} {moreCurriculum ? <X size={32}/> : <CircleEllipsis size={30} />}
                  </button>

                  {showMore && (
                    <button onMouseEnter={() => setCloseIcon(true)} onMouseLeave={() => setCloseIcon(false)} onClick={() => setShowMore(false)} className={styles.hud_btn_sm}>
                      SHOW LESS {closeIcon ? <X size={38}/> : <CircleX size={38} />}
                    </button>
                  )}
                </div>

                {curriculumActive && (
                  <div className={styles.sidebar_curriculum}>
                    <a href={curriculumDownload} download="Vinicius_Software_Engineer.pdf" onMouseEnter={() => setDownloadIcon(true)} onMouseLeave={() => setDownloadIcon(false)} className={styles.hud_btn_sm}>
                      Download {downloadIcon ? <HardDriveDownload /> : <Download/>}
                    </a>
                    {/* O BOTÃO 'SHOW' E O ÍCONE SCANEYE FORAM REMOVIDOS DAQUI */}
                    <br />
                    <button onClick={() => setCurriculumActive(false)} className={styles.hud_btn_sm}>
                      CLOSE THE RESUME <CircleX size={30}/>
                    </button>
                  </div>
                )}
              </footer>
            </section>
          </div>

          <div className={styles.video_container}>
            <img className={styles.nt_img} src={notebookImg} alt="Notebook " />
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

export default AboutMe;