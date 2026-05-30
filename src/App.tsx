import Wellcome from './components/Wellcome/Wellcome'
import './style/global.css'
import introVideo from './assets/video/background_pixel.mp4'
function App() {

  return (
    <>
    <Wellcome />
    <section id='intro-video'>
      <video autoPlay muted loop playsInline id='bg-video'>
        <source type='video/mp4' src={introVideo}/>
      </video>
    </section>
    </>
  )
}
export default App
