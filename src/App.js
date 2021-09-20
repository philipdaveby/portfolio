import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';


const App = () => {
  return (
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
            <Nav />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
