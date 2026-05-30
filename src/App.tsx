import Wellcome from './components/Wellcome/Wellcome'
import './style/global.css'
import introVideo from './assets/video/background_pixel.mp4'
import secondIntroVideo from './assets/video/pixel_two.mp4'
import thirdIntro from './assets/video/pixel_three.mp4'
import { ArrowBigLeftDash } from 'lucide-react';
import { ArrowBigRightDash } from 'lucide-react';
import { useState } from 'react';



function App() {

  const video = [introVideo, secondIntroVideo, thirdIntro]
  const [indexVideo, setIndexVideo] = useState<number>(0)

  const prevBackground = () => setIndexVideo((prevIndex) => (prevIndex - 1))
  const nextBackground = () => setIndexVideo((prevIndex) => (prevIndex + 1))

  
  //  tenho que colocar o terceiro video

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
