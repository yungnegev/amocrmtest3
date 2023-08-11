import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Character from './components/Character'
import News from './components/News'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>  
      <Navbar />
      <Hero />
      <Character />
      <News />
      <Footer />
    </div>
  )
}

export default App
