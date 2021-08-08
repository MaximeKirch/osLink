import Nav from './components/Nav'
import Body from './components/Body'
import './App.css';
import HeroBanner from'./components/HeroBanner'

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <Nav />
        
      </header>

      <HeroBanner />
      <Body />
      
    </div>
  );
}

export default App;
