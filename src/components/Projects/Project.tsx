import { useEffect, useState, useRef } from "react"
import dashboardProject from '../../assets/img/projects/dashboard_first.png'
import fintechBank from '../../assets/img/projects/fintech_bank.png'
import pizzariaProject from '../../assets/img/projects/pizzaria.png'
import Card from "./Card/Card";
import pc_project from '../../assets/img/projects/pc_project.jpeg'
import styles from './Project.module.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

    const [myProjects]= useState<ProjectsProps[]>([
        {id: 1, imgProject: fintechBank,
          nameProject: 'Fintanch Bank MO',
         descProject: 'Plataforma financeira desenvolvida em React e TypeScript para gerenciamento de faturas e extratos, com foco em tipagem segura, consistência de cálculos e interface responsiva.',
        urlProject: 'https://invoice-manager-mobile-vy.vercel.app/'},
        {id: 2, imgProject: dashboardProject,
         nameProject: 'Dashboard coins and weather',
         descProject: 'O Dashboard Coins and Weather é um painel web responsivo projetado para centralizar informações globais essenciais em tempo real. O projeto integra APIs para monitorar a cotação e conversão de principais moedas mundiais, exibir dados climáticos atualizados de capitais estratégicas e acompanhar o fuso horário local de cada região. Foca em precisão de dados.',
         urlProject: 'https://dashboard-coins.vercel.app/'},
        {id: 3, imgProject: pizzariaProject,
         nameProject: 'Landing Page - Pizzaria',
         descProject: 'Aplicação interativa para visualização de sabores, foco na experiência de cliente ter uma pré-visualização  dos itens que serão requisitados.',
         urlProject: 'https://pizzaria-zeta-six.vercel.app/'}
    ])

    const [data, SetData] = useState<string>()



    useEffect(() => {
      const timerSetter = setInterval(() => {
        const newD = new Date()
        const hour = newD.getHours()
        const minutes = newD.getMinutes()
        const seconds = newD.getSeconds()

        const hStr = hour.toString().padStart(2, '0')
        const mStr = minutes.toString().padStart(2,'0')
        const sStr = seconds.toString().padStart(2, '0')

        SetData(`${hStr}:${mStr}:${sStr}h`)
      }, 1000);
      
      return () => clearInterval(timerSetter)
    }, [])

    useEffect(() => {

      gsap.fromTo(mainBoxRef.current, {
        opacity: 0,
        scale: 0.6,
        y: 60
      }, {
        ease: 'power2.in',
        duration: 0.4,
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: projectAreaRef.current,
          start: 'top 80%',
          end: 'bottom 30%'
        }
      })

      gsap.fromTo(listRef.current, {
        x: -220,
        opacity: 0,
      }, {
        x:0, 
        delay: 0.5,
        opacity:1,
        duration: 0.6,
        scrollTrigger: {
          trigger: projectAreaRef.current,
          start: 'top 80%',
          end: 'bottom 20%'
        }        
      })

      gsap.fromTo(titleTxtRef.current, {
        x: -150,
        opacity: 0,
      }, {
        x:0, 
        delay: 0.7,
        opacity: 1,
        duration: 0.68,
        scrollTrigger: {
          trigger: projectAreaRef.current,
          start: 'top 80%',
          end: 'bottom 20%'
        }        
      })

      gsap.fromTo(paragraphRef.current, {
        x: -150,
        opacity: 0,
        scale: 0.87
      }, {
        x:0, 
        delay: 0.84,
        opacity: 1,
        scale: 1,
        duration: 0.55,
        scrollTrigger: {
          trigger: projectAreaRef.current,
          start: 'top 80%',
          end: 'bottom 20%'
        }        
      })

      gsap.fromTo(imgCardRef.current, {
        x: 170,
        opacity: 0,
      }, {
        x:0, 
        delay: 0.5,
        opacity: 1,
        duration: 0.85,
        scrollTrigger: {
          trigger: projectAreaRef.current,
          start: 'top 80%',
          end: 'bottom 20%'
        }        
      })      
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
                  <p ref={paragraphRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita ducimus quo molestiae commodi hic consequuntur sint! Saepe sed recusandae, omnis quas aperiam minima nemo vero similique dicta laboriosam nulla.</p>
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

    </section>
    </>
  )
}

export default Project