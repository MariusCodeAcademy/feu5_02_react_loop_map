import './styles/reset.css';
import './styles/App.css';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import Projects from './components/projects/Projects';
import About from './components/about/About';

const prArr = [
  { id: 1, title: 'Sunflower Cottage', img: 'house5.jpg' },
  { id: 2, title: "The Cat's Meow", img: 'cat.jpg' },
  { id: 3, title: 'Willow House', img: 'house3.jpg' },
  { id: 4, title: 'Tranquility Lodge', img: 'house2.jpg' },
  { id: 'h1', title: 'Brick House', img: 'bg' },
  { id: 'h2', title: 'Blue House', img: 'bg' },
  { id: 'h3', title: 'Red House', img: 'bg' },
  { id: 'h4', title: 'Straw House', img: 'bg' },
];

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects list={prArr} />
      <About />
    </div>
  );
}
export default App;
