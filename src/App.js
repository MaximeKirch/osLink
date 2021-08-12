import Nav from './components/Nav'
import Body from './components/Body'
import './App.css';
import HeroBanner from'./components/HeroBanner'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <div className="appContent">
      <header className="appHeader">
        <Nav />
        
      </header>

      <HeroBanner />
      <Body />
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
