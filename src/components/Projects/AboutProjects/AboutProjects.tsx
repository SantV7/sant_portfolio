import { useEffect, useRef } from 'react';
import styles from './AboutProjects.module.css'
import gsap from 'gsap';

interface ProjectFocus {
    uiAndUx: string;
    design: string;
    structure: string;
    development: string;
    responsiveness: string;
    contentG4: string[]
    tips : {
        tratament?: string;
        validation?: string;
        pratics?: string;        
    } []
}    

const AboutProjects = () => {

    const focus: ProjectFocus = {
        uiAndUx: 'UI/UX',
        design: 'Design student',
        structure: 'Clean Code and Semantics',
        development: 'Front-End Development',
        responsiveness:'Responsive Design',
        contentG4: [
           'Fluid animations',
           'Performance',
           'Mobile-First Workflow'
        ],
        tips : [
            {tratament:'Tratamento de dados'},
            {validation:'Validação'},
            {pratics:'Boas práticas'}
        ]
    }
    const secStart = useRef<HTMLElement | null>(null)
    const titleFocus = useRef<HTMLHeadingElement| null>(null)
    const card1 = useRef<HTMLDivElement | null>(null)
    const card2 = useRef<HTMLDivElement | null>(null)
    const card3 = useRef<HTMLDivElement | null>(null)
    const card4 = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        gsap.fromTo(titleFocus.current, {
            opacity: 0,
            scale: 0.65,
            y: 15,
           
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
        })  

        gsap.fromTo(card1.current, {
            opacity: 0,
            scale: 0.85,
            x: -20,
            backgroundColor: 'red'
        }, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            backgroundColor: 'rgba(47, 28, 77, 0.418)',
            scrollTrigger: {
                trigger: secStart.current,
                start: 'top 66%',
                end: 'center: 30%',
                scrub: true
            }
        })

        gsap.fromTo(card2.current, {
            opacity: 0,
            scale: 0.85,
            backgroundColor: 'lightgray',
            x: -25
        }, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.5,
            backgroundColor: 'rgba(47, 28, 77, 0.418)',
            ease: 'power2.out',
            scrollTrigger: {
                trigger: secStart.current,
                start: 'top 66%',
                end: 'center: 30%',
                scrub: true
            }
        })      
        
        gsap.fromTo(card3.current, {
            opacity: 0,
            scale: 0.65,
            y: 35,
            backgroundColor: 'orange',
            borderRadius: 7
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            backgroundColor: 'rgba(45, 49, 61, 0.438)',
            borderRadius: 0,
            scrollTrigger: {
                trigger: secStart.current,
                start: 'top 66%',
                end: 'center: 30%',
                scrub: true
            }            
        })       
        
        gsap.fromTo(card4.current, {
            opacity: 0,
            scale: 0.65,
            y: -15,
            borderRadius: 7,
            backgroundColor: 'black'
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.53,
            ease: 'power2.out',
            borderRadius: 0,
            backgroundColor: ' rgba(45, 49, 61, 0.438)',
            scrollTrigger: {
                trigger: secStart.current,
                start: 'top 66%',
                end: 'center: 30%',
                scrub: true
            }
        })            

        gsap.fromTo( titleFocus.current, {
            y: -100,
            scale: 0.83,
            opacity: 0
        }, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.45,
            scrollTrigger: {
                trigger: secStart.current,
                start: 'top 86%',
                end: 'center: 30%',
                scrub: true
            }
        })

    }, [])

  return (
    <>
     <section ref={secStart} className={styles.more_info_project}>
       <div>
           <h1 className={styles.title_focus} ref={titleFocus}>Project Development Focus</h1>
       </div>

       <section className={styles.about_projects}>
           <div ref={card1} className={styles.g1}>{focus.uiAndUx} <br></br> {focus.design}</div>
           <div ref={card2} className={styles.g2}>{focus.structure}</div>
           <div ref={card3} className={styles.g3}>{focus.development}</div>
           <div ref={card4} className={styles.g4}>
            <h4>{focus.responsiveness}</h4>
            {focus.contentG4.map((item, indexKey) => (
                <li key={indexKey}>
                    {item}
                </li>
            ))}
           </div>
       </section>  
     </section>  
    </>
  )
}

export default AboutProjects