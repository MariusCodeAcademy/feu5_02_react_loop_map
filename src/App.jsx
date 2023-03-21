import './App.css';
import Card from './components/Card';

const cardsArr = [
  { id: 1, title: 'Html', body: 'Body of HTml' },
  { id: 2, title: 'Css', body: 'Body of Css' },
  { id: 3, title: 'JS', body: 'Body of JS' },
  { id: 4, title: 'Html', body: 'Body of HTml' },
  { id: 5, title: 'Css', body: 'Body of Css' },
  { id: 6, title: 'JS', body: 'Body of JS' },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <div className='gridThree'>
        {cardsArr.map((cardObj) => (
          <Card key={cardObj.id} item={cardObj} />
        ))}
        {/* <Card item={cardsArr[1]} />
        <Card item={cardsArr[2]} /> */}
      </div>
    </div>
  );
}
export default App;
