import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import TopBar from './components/topbar/TopBar';
import Works from './components/works/Works';

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Testimonials />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
