import { useEffect, useState, useRef, useMemo } from "react"
import dashboardProject from '../../assets/img/projects/dashboard_first.png'
import fintechBank from '../../assets/img/projects/fintech_bank.png'
import Card from "./Card/Card";
import pc_project from '../../assets/img/projects/pc_project.jpeg'
import styles from './Project.module.css'
import { gsap } from 'gsap';
import gameReveal from '../../assets/img/projects/gameReveal.png'
import uploadImg from '../../assets/img/projects/upload_picture.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutProjects from "./AboutProjects/AboutProjects";
import pizzaProject from '../../assets/img/projects/pizzaria.png'
import goalImg from '../../assets/img/projects/goal_img.png'
import financialImg from '../../assets/img/projects/financial_api.jpg'
import profileImg from '../../assets/img/projects/profile_api.jpg'


gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
    id: number;
    imgProject: string;
    nameProject: string;
    descProject: string;
    urlProject: string
}

const Project = () => {
    const projectAreaRef = useRef<HTMLDivElement>(null);
    const mainBoxRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const titleTxtRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const imgCardRef = useRef<HTMLImageElement>(null);

const myProjects = useMemo<ProjectsProps[]>(() => [
{
        id: 1,
        imgProject: uploadImg, 
        nameProject: 'Upload Manager (Full-Stack)',
        descProject: 'Full-stack document and archive management application built with React, TypeScript, Node.js, and PostgreSQL. Features secure file uploads, comment integration, and RESTful API communication.',
        urlProject: 'https://upload-maneger.vercel.app/'        
    },
    {
        id: 2,
        imgProject: financialImg, 
        nameProject: 'Financial API (Backend)',
        descProject: 'RESTful API built with TypeScript, Node.js, Express, and PostgreSQL using Prisma ORM. Implements Clean Architecture, JWT authentication, RBAC, bcrypt hashing, and atomic transaction handling.',
        urlProject: 'https://github.com/SantV7/financial-api'     
    },
    {
        id: 3, 
        imgProject: pizzaProject,
        nameProject: 'Landing Page - Pizzaria (Frontend)',
        descProject: 'High-performance interactive landing page built with React and GSAP animations. Focuses on smooth micro-interactions, media optimization, and intuitive UI/UX for seamless menu navigation.',
        urlProject: 'https://pizzaria-zeta-six.vercel.app/'
    },
    {
        id: 4, 
        imgProject: fintechBank,
        nameProject: 'Fintech Bank MO (Frontend)',
        descProject: 'Financial SPA built with React and TypeScript for tracking invoices and financial statements. Features strict type safety, state management, dynamic calculation logic, and responsive UI design.',
        urlProject: 'https://invoice-manager-mobile-vy.vercel.app/'
    },
    {
        id: 5, 
        imgProject: dashboardProject,
        nameProject: 'data analysis dashboard (Frontend)',
        descProject: 'Real-time financial and weather dashboard integrating multiple REST APIs. Features asynchronous data fetching, currency conversion tools, local time zone monitoring, and robust error handling.',
        urlProject: 'https://dashboard-coins.vercel.app/'
    },
    {
        id: 6, 
        imgProject: gameReveal,
        nameProject: 'Game Reveal (Frontend)',
        descProject: 'Interactive word-guessing web game designed to demonstrate React state logic, complex conditional rendering, dynamic user input handling, and clean component architecture.',
        urlProject: 'https://game-reveal.vercel.app/'
    },
    {
        id: 7,
        imgProject: goalImg,
        nameProject: 'YourGoals (Frontend)',
        descProject: 'Task and habit management tool with complete CRUD functionality, built using React and TypeScript. Features browser localStorage persistence and custom theme toggling.',
        urlProject: 'https://sant-goal-manager.vercel.app/'        
    },
    {
        id: 8,
        imgProject: profileImg, 
        nameProject: 'Profile API (Backend)',
        descProject: 'Node.js and TypeScript backend service managing users, profiles, and post publications. Integrates PostgreSQL with Prisma ORM, featuring JWT authentication and role-based access control.',
        urlProject: 'https://github.com/SantV7/instagram-api'        
    }
], []);

    const [data, SetData] = useState<string>('') ;

    useEffect(() => {
        let animationFrameId: number ;
        let lastSecond = -1 ;

        const updateClock = () => {
            const newD = new Date() ;
            const seconds = newD.getSeconds() ;

            if (seconds !== lastSecond) {
                lastSecond = seconds ;
                const hour = newD.getHours() ;
                const minutes = newD.getMinutes() ;

                const hStr = hour.toString().padStart(2, '0') ;
                const mStr = minutes.toString().padStart(2, '0') ;
                const sStr = seconds.toString().padStart(2, '0') ;

                SetData(`${hStr}:${mStr}:${sStr}h`) ;
            }

            animationFrameId = requestAnimationFrame(updateClock) ;
        } ;

        animationFrameId = requestAnimationFrame(updateClock)
        return () => cancelAnimationFrame(animationFrameId)
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const commonScrollTrigger = {
                trigger: projectAreaRef.current,
                start: 'top 63%', 
                toggleActions: 'play none none none' 
            };

            gsap.fromTo(mainBoxRef.current, {
                opacity: 0,
                scale: 0.9,
                y: 20
            }, {
                ease: 'power2.out', 
                duration: 0.5,
                y: 0,
                opacity: 1,
                scale: 1,
                scrollTrigger: commonScrollTrigger
            })

            gsap.fromTo([listRef.current, titleTxtRef.current], {
                x: (index) => index === 0 ? -130 : -110,
                opacity: 0,
            }, {
                x: 0, 
                delay: (index) => index === 0 ? 0.2 : 0, 
                opacity: 1,
                duration: (index) => index === 0 ? 0.67 : 0.68,
                scrollTrigger: commonScrollTrigger
            })

            gsap.fromTo(paragraphRef.current, {
                x: -120,
                opacity: 0,
                scale: 0.9
            }, {
                x: 0, 
                opacity: 1,
                scale: 1,
                duration: 0.65,
                scrollTrigger: commonScrollTrigger
            })

            gsap.fromTo(imgCardRef.current, {
                x: 100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: 0.85,
                scrollTrigger: commonScrollTrigger
            })
        }, projectAreaRef);

        return () => ctx.revert();
    }, [])

  return (
    <>
    <section ref={projectAreaRef} id="project_area" className={styles.project_sect}>
        <div className={styles.card_intro}>
          <div ref={mainBoxRef}  className={styles.card_intro_flex}>
            <div className={styles.aten}>
              <div className={styles.box_info}>
                <header>
                  <div ref={listRef}>
                    <h3>Responsive</h3>
                    <h3>Design</h3>
                    <h3>Functional</h3>
                  </div>
                  <div>
                    <h3 className={styles.font_orange}>{data}</h3>
                  </div>
                </header>
                <h3 ref={titleTxtRef} className={styles.main_title_card}>My projects in <span className={styles.font_orange}>2026</span></h3>
                <div className={styles.context_paragraph}>
                  <p ref={paragraphRef}>Developing scalable full-stack web applications by connecting responsive React interfaces with robust Node.js backend services. Focused on clean architecture, secure RESTful APIs, data validation, and databases to deliver high-performance user experiences.
                 </p>
                </div>
              </div>
              <div ref={imgCardRef} className={styles.img_older_pc}>
                <img src={pc_project} alt="old pc" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sect_view_projects}>
            {myProjects.map((itemP) => (
              <Card
                 key={itemP.id}
                 id={itemP.id}
                 imgP={itemP.imgProject}
                 nameP={itemP.nameProject}
                 descP={itemP.descProject}
                 urlP={itemP.urlProject}
              />
            ))}
        </div>
        <AboutProjects />
    </section>
    </>
  )
}

export default Project;