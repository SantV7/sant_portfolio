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
        <ArrowBigDown  size={50} color='white'/>
        <ArrowBigDown  size={50} color='white'/>
        <ArrowBigDown  size={50} color='white'/>
        <ArrowBigDown  size={50} color='white'/>
      </div>

      <div>
        {/* scroll to bottom */}
      </div>
    </section>
    </>
  )
}
export default App
