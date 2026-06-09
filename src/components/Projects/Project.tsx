import { useState } from "react"
import dashboardProject from '../../assets/img/projects/dashboard_first.png'
import fintechBank from '../../assets/img/projects/fintech_bank.png'
import pizzariaProject from '../../assets/img/projects/pizzaria.png'

interface ProjectsProps {
    id: number;
    imgProject: string;
    nameProject: string;
    descProject: string;
}


const Project = () => {

    const [myProjects, setMyProject]= useState<ProjectsProps[]>([
        {id: 1, imgProject: fintechBank, nameProject: 'Fintanch Bank MO', descProject: 'descrição dps' },
        {id: 2, imgProject: dashboardProject, nameProject: 'Dashboard coins and weather', descProject: 'descrição dps' },
        {id: 3, imgProject: pizzariaProject, nameProject: 'Landing Page - Pizzaria', descProject: 'descrição dps' }
    ])



  return (
    <div>Project</div>
  )
}

export default Project