import { useEffect, useState, useRef, useMemo } from "react"
import dashboardProject from '../../assets/img/projects/dashboard_first.png'
import fintechBank from '../../assets/img/projects/fintech_bank.png'
import Card from "./Card/Card";
import pc_project from '../../assets/img/projects/pc_project.jpeg'
import styles from './Project.module.css'
import { gsap } from 'gsap';
import gameReveal from '../../assets/img/projects/gameReveal.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutProjects from "./AboutProjects/AboutProjects";
import pizzaProject from '../../assets/img/projects/pizzaria.png'
import goalImg from '../../assets/img/projects/goal_img.png'

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
            imgProject: fintechBank,
            nameProject: 'Fintech Bank MO',
            descProject: 'A financial platform developed with React and TypeScript for managing invoices and statements, focusing on secure typing, calculation consistency, and a responsive interface.',
            urlProject: 'https://invoice-manager-mobile-vy.vercel.app/'
        },
        {
            id: 2, 
            imgProject: dashboardProject,
            nameProject: 'Coins and Weather Dashboard',
            descProject: 'A responsive web dashboard designed to centralize essential global information in real time. The project integrates APIs to monitor the exchange rates and conversion of major world currencies, display updated weather data from strategic capitals, and track the local time zone of each region, with a strong focus on data accuracy.',
            urlProject: 'https://dashboard-coins.vercel.app/'
        },
        {
            id: 3, 
            imgProject: pizzaProject,
            nameProject: 'Landing Page - Pizzaria',
            descProject: 'An interactive application for viewing flavors, focusing on providing clients with a preview of the items they intend to order to enhance their experience.',
            urlProject: 'https://pizzaria-zeta-six.vercel.app/'
        },
        {
            id: 4, 
            imgProject: gameReveal,
            nameProject: 'Game Reveal',
            descProject: 'An interactive word-guessing game applying state management logic and data processing handling.',
            urlProject: 'https://game-reveal.vercel.app/'
        },
        {
            id:5,
            imgProject: goalImg,
            nameProject: 'YourGoals',
            descProject: 'A dynamic task and habits manager built with React and TypeScript, featuring localStorage persistence, customized UI theme configurations, and complete CRUD functionality.',
            urlProject: 'https://sant-goal-manager.vercel.app/'         

        } 
    ], []);

    const [data, SetData] = useState<string>('')

    useEffect(() => {
        let animationFrameId: number;
        let lastSecond = -1;

        const updateClock = () => {
            const newD = new Date()
            const seconds = newD.getSeconds()

            if (seconds !== lastSecond) {
                lastSecond = seconds;
                const hour = newD.getHours()
                const minutes = newD.getMinutes()

                const hStr = hour.toString().padStart(2, '0')
                const mStr = minutes.toString().padStart(2, '0')
                const sStr = seconds.toString().padStart(2, '0')

                SetData(`${hStr}:${mStr}:${sStr}h`)
            }

            animationFrameId = requestAnimationFrame(updateClock)
        }

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
                  <p ref={paragraphRef}>Developing modern, intuitive interfaces by combining responsive 
                    design with clean code. My focus is on transforming complex
                    ideas into functional, fast, and visually appealing web applications,
                    delivering an exceptional user experience and optimized performance.
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