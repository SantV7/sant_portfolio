import { useEffect, useRef } from 'react';
import styles from './AboutProjects.module.css'

interface ProjectFocus {
    uiAndUx: string;
    design: string;
    structure: string;
    development: string;
    responsiveness: string;
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
        tips : [
            {tratament:'Tratamento de dados'},
            {validation:'Validação'},
            {pratics:'Boas práticas'}
        ]
    }

    const card1 = useRef<HTMLDivElement | null>(null)
    const card2 = useRef<HTMLDivElement | null>(null)
    const card3 = useRef<HTMLDivElement | null>(null)
    const card4 = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        gsap.fromTo(card1.current, {
            opacity: 0,
            scale: 0.85,
            x: -20
        }, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
        })

        gsap.fromTo(card2.current, {
            opacity: 0,
            scale: 0.85,
            x: -25
        }, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
        })      
        
        gsap.fromTo(card3.current, {
            opacity: 0,
            scale: 0.65,
            y: 35,
            borderRadius: 7
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            borderRadius: 0
        })       
        
        gsap.fromTo(card4.current, {
            opacity: 0,
            scale: 0.65,
            y: -10,
            borderRadius: 7
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            borderRadius: 0,
        })            
    }, [])

  return (
    <>
    <div>
        <h1>Project Development Focus</h1>
    </div>
    <section className={styles.about_projects}>
        <div className={styles.g1}>{focus.uiAndUx} <br></br> {focus.design}</div>
        <div className={styles.g2}>{focus.structure}</div>
        <div className={styles.g3}>{focus.development}</div>
        <div className={styles.g4}>{focus.responsiveness}</div>
    </section>    
    </>
  )
}

export default AboutProjects