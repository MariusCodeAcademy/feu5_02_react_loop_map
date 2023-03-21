import './styles/reset.css';
import './styles/App.css';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import Projects from './components/projects/Projects';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects list={[]} />
      <About />
    </div>
  );
}
export default App;
