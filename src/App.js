import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import { Switch, Route } from 'react-router-dom';
import NewDesign from './components/NewDesign/NewDesign';


const App = () => {
  return (
      <div className="App">
        <Switch>
          <Route path="/new-design">
            <NewDesign />
          </Route>
          <Route path="/">
            <h1>PHILIP DAVEBY</h1>
            <Portfolio />
            <About />
          </Route>
        </Switch>
        <Nav />
      </div>
  );
}

export default App;
