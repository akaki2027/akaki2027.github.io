import Nav from './components/Nav'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
