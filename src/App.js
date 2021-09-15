import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <div className="App">
      <h1>PHILIP DAVEBY</h1>
      <Portfolio />
      <About />
      <Nav />
    </div>
  );
}

export default App;
