import './styles/App.scss'
import './styles/partials/_variables.scss'
import './styles/partials/_mixins.scss'
import './styles/partials/_global.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import VideoInfo from './components/VideoInfo/VideoInfo'
import Comments from './components/Comments/Comments'

function App() {
  return (
    <body>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <VideoInfo />
        <Comments />
      </main>
    </body>
  );
}

export default App;
