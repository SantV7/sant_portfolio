import Wellcome from './components/Wellcome/Wellcome'
import './style/global.css'
import secondIntro from './assets/video/background_pixel.mp4'
import thirdIntro from './assets/video/pixel_two.mp4'
import firstIntro from './assets/video/pixel_three.mp4'
import { ArrowBigLeftDash } from 'lucide-react';
import { ArrowBigRightDash } from 'lucide-react';
import { useEffect, useState } from 'react';
import gsap from 'gsap'



function App() {

  const video = [firstIntro, secondIntro, thirdIntro]
  const [indexVideo, setIndexVideo] = useState<number>(0)

  const prevBackground = () => setIndexVideo((prevIndex) => (prevIndex - 1 & video.length) % video.length )
  const nextBackground = () => setIndexVideo((prevIndex) => (prevIndex - 1 + video.length) % video.length )

  useEffect(() => {

    gsap.fromTo('.change-bg', {

      scale: 0,
      opacity: 0.45
    }, {
    
      scale: 1,
      duration: 1.5,
      opacity: 1,
      ease: 'power2.out',
    })

    const timeLine = gsap.timeline();

    
timeLine.fromTo('#scroll_wellcome', 
      { y: -50,
        opacity: 0, 
        scale: 2 
      }, 
      { 
        y: 0,
        delay: 1.35,
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power2.out" 
      }
    )
    
    timeLine.to('#scroll_wellcome', {
      y: 25,
      duration: 1.7,
      repeat: -1,
      yoyo: true,
      ease: 'linear'
    })
  }, [])
  
 

  return (
    <>
    <Wellcome />
    <section id='intro-video'>
      <video key={indexVideo} autoPlay muted loop playsInline id='bg-video'>
        <source type='video/mp4' src={video[indexVideo]}/>
      </video>
      <div id='area_arrow'>
        <ArrowBigLeftDash onClick={prevBackground} className='change-bg' size={50} color='white'/>
        <ArrowBigRightDash onClick={nextBackground} className='change-bg' size={50} color='white'/>
      </div>

      <div className='scroller_indicator'>
        <h1 id='scroll_wellcome'>Scroll Down</h1>
      </div>
    </section>
    </>
  )
}
export default App
