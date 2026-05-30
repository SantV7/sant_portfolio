import Wellcome from './components/Wellcome/Wellcome'
import './style/global.css'
import introVideo from './assets/video/background_pixel.mp4'
import { ArrowBigDown } from 'lucide-react';
function App() {

  return (
    <>
    <Wellcome />
    <section id='intro-video'>
      <video autoPlay muted loop playsInline id='bg-video'>
        <source type='video/mp4' src={introVideo}/>
      </video>
      <div id='area_arrow'>
        <ArrowBigDown className='arrows'  size={50} color='white'/>
        <ArrowBigDown className='arrows'  size={50} color='white'/>
        <ArrowBigDown className='arrows'  size={50} color='white'/>
      </div>

      <div className='scroller_indicator'>
        {/* scroll to bottom */}
        <h1 id='scroll_wellcome'>Scroll to bottom</h1>
      </div>
    </section>
    </>
  )
}
export default App
