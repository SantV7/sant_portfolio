import Wellcome from './components/Wellcome/Wellcome'
import './style/global.css'
import introVideo from './assets/video/background_pixel.mp4'
import secondIntroVideo from './assets/video/pixel_two.mp4'
import thirdIntro from './assets/video/pixel_three.mp4'
import { ArrowBigLeftDash } from 'lucide-react';
import { ArrowBigRightDash } from 'lucide-react';
import { useState } from 'react';


function App() {

  const [backgroundVideo, setBackgroundVideo] = useState<string>(introVideo)

  const prevBackground = () => setBackgroundVideo(introVideo)
  const nextBackground = () => setBackgroundVideo(secondIntroVideo)

  
  //  tenho que colocar o terceiro video
  


  return (
    <>
    <Wellcome />
    <section id='intro-video'>
      <video key={backgroundVideo} autoPlay muted loop playsInline id='bg-video'>
        <source type='video/mp4' src={backgroundVideo}/>
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
