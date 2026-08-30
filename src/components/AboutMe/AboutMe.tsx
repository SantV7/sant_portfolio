import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  CircleX, Download, MailOpen, ListTree, Workflow, Info, GlobeOff, CodeXml, HardDriveDownload, CircleEllipsis, X, Mail 
} from 'lucide-react'
import { HiLocationMarker } from "react-icons/hi"
import { FaInstagram, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaFigma, FaGitAlt, FaNodeJs } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiVercel, SiExpress } from "react-icons/si"
import { MdOutlineDesignServices, MdOutlineDevices } from "react-icons/md" 
import { BiLogoPostgresql } from "react-icons/bi"
import notebookImg from '../../assets/img/notebook.jpeg'
import oldPc from '../../assets/img/pcimg.png'
import newPc from '../../../src/assets/video/new_pc.mp4'
import aboutBackgroundVideo from '../../assets/video/b_video_bg.mp4'
import photo_anime from '../../assets/img/photo_anime.png'
import curriculumDownload from '../../assets/curriculum/software_engineer.pdf'
import styles from './AboutMe.module.css'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const WhoRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [curriculumActive, setCurriculumActive] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [downloadIcon, setDownloadIcon] = useState<boolean>(false)
  const [closeIcon, setCloseIcon] = useState<boolean>(false)
  const [curriculumSetter, setCurriculumSetter] = useState<string>('gray')
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
    ScrollTrigger.refresh()
  }, [showMore, moreCurriculum])

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
          end: 'center 80%',
          scrub: true
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

      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: `.${styles.video_container}`,
          start: 'top 85%',
          end: 'bottom top',
          onEnter: () => {
            videoRef.current?.play().catch(err => console.log(err))
          },
          onLeave: () => {
            videoRef.current?.pause()
          },
          onEnterBack: () => {
            videoRef.current?.play().catch(err => console.log(err))
          },
          onLeaveBack: () => {
            videoRef.current?.pause()
          }
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
          stagger: 0.08
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
    <section id='about_me_sec' ref={sectionRef} className={styles['about_me']}>
      <video
        className={styles.background_video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onCanPlay={(event) => {
          event.currentTarget.playbackRate = 0.65
        }}
      >
        <source src={aboutBackgroundVideo} type="video/mp4" />
      </video>
      <div className={styles.background_overlay} aria-hidden="true" />
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
                    <a className={styles.links_reference} href="https://www.linkedin.com/in/viniciussant07"
                     target='_blank' rel="noreferrer">
                      <FaLinkedin color="#b2c9ff" size={23}/> LinkedIn
                    </a>
                    <a className={styles.links_reference} href="https://www.instagram.com/__sant_v/"
                     target='_blank' rel="noreferrer">
                      <FaInstagram color="#b2c9ff" size={23}/> Instagram
                    </a>
                    <a id={styles.m_last} className={styles.links_reference} href="https://portfolio-santv7.vercel.app/"
                     target='_blank' rel="noreferrer">
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
                <p><span>Age:</span> 19</p>
                <p><span>Profession:</span> Software Developer</p>
                <p><span>Stack:</span> Full-Stack</p>

                {showMore && (
                  <>
                    <p><span>Specializations:</span>Software Engineer and UI/UX Design</p>
                    <p><span>Programming languages:</span>TypeScript, JavaScript, Python</p>
                    <p><span>Frontend:</span>React, HTML5, CSS3, SASS/SCSS, Tailwind CSS</p>
                    <p><span>Backend:</span>Node.JS, Express</p>  
                    <p><span>Database & ORMs:</span>SQL & PostgreSQL | Prisma & Sequelize</p>  
                    <p><span>Design Tools:</span>Figma, Handbrake, Caesium</p>  
                    <p><span>IDE:</span>VS Code</p>  
                    <p><span>Favorite Games:</span>The Last Of Us / Uncharted / Fortnite / Valorant / Warzone...</p>
                    <p><span>Favorite Anime:</span> Monster </p>   
                  </>
                )}

                {moreCurriculum && (
                  <div id={styles.about_me_area} className={styles.box_info}>
                    <div ref={aboutRef} className={styles.about_me_title}>
                      <header>
                        <h3 id={styles.about_title} className={styles.more_data_title}> <ListTree /> ABOUT ME</h3>
                      </header>
                      <p>
                        Software Engineer focused on Full-Stack development using React, TypeScript, and Node.js. Experienced in building and integrating RESTful APIs, relational databases (PostgreSQL/MySQL), and ORMs (Prisma). Skilled in creating responsive, high-performance interfaces with GSAP animations and UI/UX best practices in Figma. Committed to Clean Code, structured version control (Git/GitHub), and agile methodologies, leveraging AI tools with human critical analysis for effective decision-making.
                      </p>
                    </div>

                    <div className={styles.format_icons_about_me}>
                      <h3 id={styles.tech_design_title} className={styles.more_data_title}> {'>_'} TECH STACK & TOOLS</h3>
                      <div className={styles.all_icons}>
                        <div className={styles.format_icons_skills}><FaHtml5 size={30} color="#E34F26" /> HTML5</div>
                        <div className={styles.format_icons_skills}><FaCss3Alt size={30} color="#1572B6" /> CSS3</div>
                        <div className={styles.format_icons_skills}><SiTailwindcss size={30} color="#06B6D4" /> Tailwind</div>
                        <div className={styles.format_icons_skills}><FaSass size={30} color="#CC6699" /> SCSS</div>
                        <div className={styles.format_icons_skills}><FaReact size={30} color="#61DAFB" /> React</div>
                        <div className={styles.format_icons_skills}><SiTypescript size={28} color="#3178C6" /> TypeScript</div>
                        <div className={styles.format_icons_skills}><FaJs size={30} color="#F7DF1E" /> JavaScript</div>
                        <div className={styles.format_icons_skills}><FaNodeJs size={30} color="#339933" /> Node.js</div>
                        <div className={styles.format_icons_skills}><SiExpress size={30} color="#FFFFFF" /> Express</div>
                        <div className={styles.format_icons_skills}><BiLogoPostgresql size={32} color="#4169E1" /> PostgreSQL</div>
                        <div className={styles.format_icons_skills}><MdOutlineDesignServices size={30} color="#a3c9d1"/> UI Design</div>
                        <div className={styles.format_icons_skills}><MdOutlineDevices size={30} color="#a3c9d1" /> UX Design</div>
                        <div className={styles.format_icons_skills}><FaFigma size={28} color="#F24E1E" /> Figma</div>
                        <div className={styles.format_icons_skills}><FaGitAlt size={30} color="#F05032" /> Git</div>
                        <a target='_blank' href='https://github.com/SantV7' className={styles.format_icons_skills} rel="noreferrer">
                          <FaGithub size={30} color="#FFFFFF" /> GitHub
                        </a>
                        <div className={styles.format_icons_skills}><SiVercel size={26} color="#FFFFFF" /> Vercel</div>
                        <div className={styles.format_icons_skills}>
                          <span style={{ fontWeight: 'bold', color: '#61DAFB', marginRight: '5px' }}>⚡</span> GSAP
                        </div>
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
                          <p>- JavaScript, TypeScript, HTML5, CSS3, SQL</p>
                        </div>
                        <div className={styles.skills_first}>
                          <h4>■ Libraries and Frameworks:</h4>
                          <p>- React, Node.js, Express, Tailwind CSS, Sass & SCSS</p>
                        </div>      
                        <div className={styles.skills_first}>
                          <h4>■ Animation and UI:</h4>
                          <p>- UI/UX Design Principles, Figma, GSAP, Lenis</p>
                        </div>
                        <div className={styles.skills_first}>
                          <h4>■ Tools and Workflow:</h4>
                          <p>- Git, GitHub, Vercel, PostgreSQL, REST APIs, Responsive Web Development</p>
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
                  <button onClick={() => setCurriculumActive(true)} onMouseEnter={() => setCurriculumSetter('white')}
                   className={styles.hud_btn_sm}>
                    CURRICULUM <Workflow color={curriculumSetter} size={29}/>
                  </button>

                  <button onClick={() => {
                    setMoreCurriculum(!moreCurriculum)
                    setShowMore(!moreCurriculum)
                  }} className={styles.hud_btn_sm}>
                    {moreCurriculum ? 'CLOSE' : 'MORE'} {moreCurriculum ? <X size={32}/> : <CircleEllipsis size={30} />}
                  </button>

                  ={showMore && (
                    <button onMouseEnter={() => setCloseIcon(true)} onMouseLeave={() => setCloseIcon(false)} onClick={() => setShowMore(false)} 
                    className={styles.hud_btn_sm}>
                      SHOW LESS {closeIcon ? <X size={38}/> : <CircleX size={38} />}
                    </button>
                  )}
                </div>

                {curriculumActive && (
                  <div className={styles.sidebar_curriculum}>
                    <a href={curriculumDownload} download="software_engineer.pdf" onMouseEnter={() => setDownloadIcon(true)}
                     onMouseLeave={() => setDownloadIcon(false)} className={styles.hud_btn_sm}>
                      Download {downloadIcon ? <HardDriveDownload /> : <Download/>}
                    </a>
                
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
            <video ref={videoRef} className={styles.video_pc} preload='auto' muted loop playsInline>
              <source src={newPc} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
