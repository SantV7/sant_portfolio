import './wellcome.css'
import introVideo from '../../assets/video/background_pixel.mp4'
import { useEffect, useState } from 'react'

const Wellcome = () => {

    const [mobileView, setMobileView] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setMobileView(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => removeEventListener('resize', handleResize)
    }, [])

  return (
    <>
    <header id='main_header'>
        <div>
            <h1 className='nick-name'>Sant v7</h1>
        </div>

        <nav id='nav-global' className={` nav-base ${mobileView > 768 ? 'navbar-desktop-style' : 'navbar-mobile-style'}`}>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projetos</a></li>
            </ul>

            <button className='contact_btn'>Contato</button>
        </nav>

    </header>
    </>
  )
}

export default Wellcome