import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
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
  const lastLocation = useLastLocation();
  const { pathname } = useLocation();

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

  const setClass = defaultClass => {
      if (!lastLocation) {
          return defaultClass
      }
      if (lastLocation.pathname === '/about' && pathname !== '/about') {
          return `${defaultClass} black-pink`
      }
      if (lastLocation.pathname !== '/about' && pathname === '/about') {
        return `${defaultClass} pink-black`
      }
      return defaultClass;
  }

  return (
      <div className="App">
        {isLoading ? <div className="load-div"></div> :
        <div className="load-div">
          <Header setClass={setClass} />
          <Switch>
            <Route path="/about">
              <About setClass={setClass} />
            </Route>
            <Route path="/contact">
              <Contact setClass={setClass} />
            </Route>
            <Route path="/">
              <Home setClass={setClass} />
            </Route>
          </Switch>
            <DesktopNav setClass={setClass} />
            <Nav setClass={setClass} />
          </div>
          }
      </div>
  );
}

export default App;
