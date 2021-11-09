import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import WaldoGame from './components/WaldoGame';
import GameOver from './components/GameOver';
import HighScores from './components/HighScores';
import PageNotFound from './components/PageNotFound';

import { GlobalStyles } from './components/styles/Global';
import { Theme } from './components/styles/Theme';

import GobblingGluttons from './assets/levels/GobblingGluttons.jpg';
import SkiResort from './assets/levels/SkiResort.png';
import ToysToysToys from './assets/levels/ToysToysToys.jpg';

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [level, setLevel] = useState<string | undefined>(undefined);

  return (

    <HashRouter>

      <ThemeProvider theme={Theme}>
      <GlobalStyles />

        <NavBar setIsGameOver={setIsGameOver} isGameOn={isGameOn} setIsGameOn={setIsGameOn} time={time} setTime={setTime} isTimerOn={isTimerOn} setIsTimerOn={setIsTimerOn} isGameOver={isGameOver} setLevel={setLevel} />

        <Switch>

          <Route exact path='/' component={HomePage} />

          <Route exact path='/gobbling-gluttons'>
            {isGameOver
              ? <GameOver isGameOver={isGameOver} setIsGameOver={setIsGameOver} time={time} level='Gobbling Gluttons' />
              : <WaldoGame isGameOver={isGameOver} setIsGameOver={setIsGameOver} isGameOn={isGameOn} setIsGameOn={setIsGameOn} setTime={setTime} setIsTimerOn={setIsTimerOn} img={GobblingGluttons} level='Gobbling Gluttons' />
            }
          </Route>

          <Route exact path='/ski-resort'>
            {isGameOver
              ? <GameOver isGameOver={isGameOver} setIsGameOver={setIsGameOver} time={time} level='Ski Resort' />
              : <WaldoGame isGameOver={isGameOver} setIsGameOver={setIsGameOver} isGameOn={isGameOn} setIsGameOn={setIsGameOn} setTime={setTime} setIsTimerOn={setIsTimerOn} img={SkiResort} level='Ski Resort' />
            }
          </Route>

          <Route exact path='/toys-toys-toys'>
            {isGameOver
              ? <GameOver isGameOver={isGameOver} setIsGameOver={setIsGameOver} time={time} level='Toys! Toys! Toys!' />
              : <WaldoGame isGameOver={isGameOver} setIsGameOver={setIsGameOver} isGameOn={isGameOn} setIsGameOn={setIsGameOn} setTime={setTime} setIsTimerOn={setIsTimerOn} img={ToysToysToys} level='Toys! Toys! Toys!' />
            }
          </Route>

          <Route exact path='/high-scores' >
            <HighScores level={level} setLevel={setLevel} />
          </Route>

          <Route component={PageNotFound} />

        </Switch>

      </ThemeProvider>

    </HashRouter>
  );
};