import './styles/App.scss'
import './styles/partials/_variables.scss'
import './styles/partials/_mixins.scss'
import './styles/partials/_global.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import VideoInfo from './components/VideoInfo/VideoInfo'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoInfo />
    </>
  );
}

export default App;
