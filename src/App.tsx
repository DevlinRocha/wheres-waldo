import { useState, useEffect } from 'react';
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

import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './index';

export interface Level {
  img: string;
  name: string;
  path: string;
}

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [level, setLevel] = useState<string | undefined>(undefined);
  const [waldoMode, setWaldoMode] = useState(true);
  const [levelList, setLevelList] = useState<Level[]>([]);

  useEffect(() => {
    getLevels();
  }, []);

  async function getLevels() {
    const levelList: any[] = [];
    const q = query(collection(db, 'Levels'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      const level = doc.data();
      levelList.push(level);
    });
    setLevelList(levelList);
  }

  return (
    <HashRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />

        <NavBar
          setIsGameOver={setIsGameOver}
          isGameOn={isGameOn}
          setIsGameOn={setIsGameOn}
          time={time}
          setTime={setTime}
          isTimerOn={isTimerOn}
          setIsTimerOn={setIsTimerOn}
          isGameOver={isGameOver}
          setLevel={setLevel}
          levelList={levelList}
        />

        <Switch>
          <Route exact path='/'>
            <HomePage
              waldoMode={waldoMode}
              setWaldoMode={setWaldoMode}
              levelList={levelList}
            />
          </Route>

          {levelList.map((level, index) => {
            return (
              <Route exact path={level.path} key={index}>
                {isGameOver ? (
                  <GameOver
                    isGameOver={isGameOver}
                    setIsGameOver={setIsGameOver}
                    time={time}
                    level={level.name}
                    waldoMode={waldoMode}
                  />
                ) : (
                  <WaldoGame
                    isGameOver={isGameOver}
                    setIsGameOver={setIsGameOver}
                    isGameOn={isGameOn}
                    setIsGameOn={setIsGameOn}
                    setTime={setTime}
                    isTimerOn={isTimerOn}
                    setIsTimerOn={setIsTimerOn}
                    img={level.img}
                    level={level.name}
                    waldoMode={waldoMode}
                  />
                )}
              </Route>
            );
          })}

          <Route exact path='/high-scores'>
            <HighScores
              level={level}
              setLevel={setLevel}
              levelList={levelList}
              waldoMode={waldoMode}
              setWaldoMode={setWaldoMode}
            />
          </Route>

          <Route component={PageNotFound} />
        </Switch>
      </ThemeProvider>
    </HashRouter>
  );
}
