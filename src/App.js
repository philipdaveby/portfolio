import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import DesktopNav from './components/DesktopNav/DesktopNav';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header';
import portfolioItems from './data/portfolioItems';

const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(portfolioItems);
  }, []);

  const cacheImages = async array => {
    const promises = await array.map(project => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = project.imageLink;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  }

  return (
      <div className="App">
        {isLoading ? <div className="load-div"></div> :
        <div className="load-div">
          <Header />
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
            <DesktopNav />
            <Nav />
          </div>
          }
      </div>
  );
}

export default App;
