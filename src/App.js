
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Dev from './pages/Dev'
import Asso from './pages/Asso';
import NotFound from './pages/NotFound';



const App = () => {


  return (

    <BrowserRouter>

      <Switch>

        <Route path="/osLink" exact component = {Home} />
        <Route path="/dev" exact component = {Dev} />
        <Route path="/asso" exact componet = {Asso} />
        <Route component = {NotFound} />

      </Switch>
    
    </BrowserRouter>
    

  );
}

export default App;
