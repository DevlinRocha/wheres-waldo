import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import WaldoGame from './components/WaldoGame';
import GameOver from './components/GameOver';
import PageNotFound from './components/PageNotFound';

import { GlobalStyles } from './components/styles/Global';
import { Theme } from './components/styles/Theme';
import { Container } from './components/styles/Container.styled';

import GobblingGluttons from './assets/GobblingGluttons.jpg';
import SkiResort from './assets/SkiResort.png';

export default function App() {
  const [isGameOver, setIsGameOver] = useState(false);

  return (

    <HashRouter>

      <ThemeProvider theme={Theme}>
      <GlobalStyles />

        <NavBar setIsGameOver={setIsGameOver} />

        <Switch>

          <Route exact path='/' component={HomePage} />

          <Route exact path='/gobbling-gluttons'>
            {isGameOver
              ? <GameOver isGameOver={isGameOver} setIsGameOver={setIsGameOver} />
              : <WaldoGame isGameOver={isGameOver} setIsGameOver={setIsGameOver} img={GobblingGluttons} level='Gobbling Gluttons' />
            }
          </Route>

          <Route exact path='/ski-resort'>
            {isGameOver
              ? <GameOver isGameOver={isGameOver} setIsGameOver={setIsGameOver} />
              : <WaldoGame isGameOver={isGameOver} setIsGameOver={setIsGameOver} img={SkiResort} level='Ski Resort' />
            }
          </Route>

          <Route component={PageNotFound} />

        </Switch>

      </ThemeProvider>

    </HashRouter>
  );
};