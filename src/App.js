import Nav from './components/Nav'
import Body from './components/Body'
import './App.css';
import HeroBanner from'./components/HeroBanner'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Search from './components/Search'
import Faq from './components/Faq'
import ModalLogic from './components/ModalLogic';
import ModalWindow from './components/ModalWindow';



function App() {

  const {open, toggle} = ModalLogic();

  return (
    <div className="App">
      <div className="appContent">
      <header className="appHeader">
        <Nav />
                
      </header>

      <HeroBanner />
      <Body />
      <ModalWindow
      open={open}
      hide={toggle}
      />
        <div className="devPage">
          <ContactForm />
          <Faq />
        
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
