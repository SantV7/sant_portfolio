import { useState } from "react"
import dashboardProject from '../../assets/img/projects/dashboard_first.png'
import fintechBank from '../../assets/img/projects/fintech_bank.png'
import pizzariaProject from '../../assets/img/projects/pizzaria.png'
import Card from "./Card/Card";

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
    <section>
        <div> Intro - Projects</div>

        <div>{myProjects.map((itemP) => (
            <Card id={itemP.id} imgP={itemP.imgProject} nameP={itemP.nameProject} descP={itemP.descProject} urlP={itemP.urlProject}/>
        ))}</div>

    </section>
    </>
  )
}

export default Project