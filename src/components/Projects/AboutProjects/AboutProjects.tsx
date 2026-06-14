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