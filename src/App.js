import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            <Nav />
      </div>
  );
}

export default App;
