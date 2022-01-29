import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import TopBar from './components/topbar/TopBar';
import Works from './components/works/Works';
import Menu from './components/menu/Menu'
import "./app.scss"
import { useState } from "react"
import Portfolio2 from './components/portfolio copy/Portfolio2';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio2 />
        <Portfolio />
        {/* <Works /> */}
        <Testimonials />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
