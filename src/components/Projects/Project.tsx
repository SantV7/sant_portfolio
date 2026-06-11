import { useEffect, useState } from "react"
import dashboardProject from '../../assets/img/projects/dashboard_first.png'
import fintechBank from '../../assets/img/projects/fintech_bank.png'
import pizzariaProject from '../../assets/img/projects/pizzaria.png'
import Card from "./Card/Card";
import pc_project from '../../assets/img/projects/pc_project.jpeg'
import styles from './Project.module.css'


interface ProjectsProps {
    id: number;
    imgProject: string;
    nameProject: string;
    descProject: string;
    urlProject: string
}


const Project = () => {

    const [myProjects]= useState<ProjectsProps[]>([
        {id: 1, imgProject: fintechBank,
         nameProject: 'Fintanch Bank MO',
         descProject: 'descrição dps',
        urlProject: ''},
        {id: 2,
         imgProject: dashboardProject,
         nameProject: 'Dashboard coins and weather',
         descProject: 'descrição dps',
         urlProject: ''},
        {id: 3,
         imgProject: pizzariaProject,
         nameProject: 'Landing Page - Pizzaria',
         descProject: 'descrição dps',
         urlProject: ''}
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




  return (
    <>
    <section className={styles.project_sect}>

        <div className={styles.card_intro}>
          <div className={styles.card_intro_flex}>
            <div className={styles.aten}>

              <div className={styles.box_info}>
                <header>
                  <div>
                    <h3>Responsive</h3>
                    <h3>Design</h3>
                    <h3>Functional</h3>
                  </div>

                  <div>
                    <h3>{data}</h3>
                  </div>
                </header>

                <h3 className={styles.main_title_card}>My projects in <span>2026</span></h3>
                <div className={styles.context_paragraph}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita ducimus quo molestiae commodi hic consequuntur sint! Saepe sed recusandae, omnis quas aperiam minima nemo vero similique dicta laboriosam nulla.</p>
                </div>
              </div>

              <div className={styles.img_older_pc}>
                <img src={pc_project} alt="old pc" />
              </div>
            </div>
          </div>
        </div>


        <div className={styles.sect_view_projects}>
            {myProjects.map((itemP) => (
              <Card id={itemP.id}
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