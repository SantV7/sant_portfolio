import { useState } from "react"
import dashboardProject from '../../assets/img/projects/dashboard_first.png'
import fintechBank from '../../assets/img/projects/fintech_bank.png'
import pizzariaProject from '../../assets/img/projects/pizzaria.png'
import Card from "./Card/Card";

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
        {id: 1, imgProject: fintechBank, nameProject: 'Fintanch Bank MO', descProject: 'descrição dps', urlProject: '' },
        {id: 2, imgProject: dashboardProject, nameProject: 'Dashboard coins and weather', descProject: 'descrição dps', urlProject: '' },
        {id: 3, imgProject: pizzariaProject, nameProject: 'Landing Page - Pizzaria', descProject: 'descrição dps', urlProject: '' }
    ])



  return (
    <>
    <section className={styles.project_sect}>
        <header className={styles.header_project}>
             <h1 className={styles.title_sect}>My projects</h1>

             <div className={styles.flex_jb}>
                <div className={styles.paragraph_introduction}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla iure, ullam quisquam quae labore officiis corrupti. Exercitationem libero odio eaque tempore dolor itaque perferendis earum, debitis tempora ab aspernatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corporis deserunt quas nisi obcaecati quam, aspernatur ratione dignissimos laudantium minima dolor aut ipsa consectetur dicta quibusdam atque. Eius, non deserunt?</div>
                <div className={styles.illustration}></div>
             </div>
        </header>

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