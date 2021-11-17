import { useState, useEffect, useRef } from 'react';
import { getDocs, collection, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '../index';
import { DocumentData } from '@firebase/firestore-types';

import {
  MainContainer,
  HighScoresContainer,
  HighScoresContainerRow,
  DifficultyGrid,
  SwitchContainer,
} from './styles/HighScoresContainer.styled';

import CharacterBanner from '../assets/CharacterBanner.png';

import GobblingGluttons from '../assets/levels/GobblingGluttons.jpg';
import SkiResort from '../assets//levels/SkiResort.png';
import ToysToysToys from '../assets/levels/ToysToysToys.jpg';

import { useLocation } from 'react-router';

interface LocationState {
  state: {
    level: string;
  };
}

interface HighScoreProps {
  level: string | undefined;
  setLevel: React.Dispatch<React.SetStateAction<string | undefined>>;
  waldoMode: boolean;
  setWaldoMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HighScores(props: HighScoreProps) {
  const [levelScores, setLevelScores] = useState<DocumentData[]>([]);

  const location: LocationState = useLocation();

  const leaderboard: any = useRef(null);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    } else {
      leaderboard.current ? leaderboard.current.scrollIntoView() : void 0;
    }
  }, [levelScores]);

  useEffect(() => {
    try {
      const newLevel = location.state.level;
      props.setLevel(newLevel);
    } catch {
      void 0;
    }
  }, []);

  useEffect(() => {
    props.level ? getLevelScores(props.level) : void 0;
  }, [props.level, props.waldoMode]);

  function handleClick(newLevel: string): void {
    props.setLevel(newLevel);
  }

  async function getLevelScores(newLevel: string) {
    const querySnapshot = await getDocs(
      collection(db, 'Levels', newLevel, 'High Scores')
    );
    const levelScores: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach(score => {
      const scoreData = score.data();
      if (newLevel === 'Ski Resort') {
        levelScores.push(score);
      } else if (props.waldoMode) {
        if ('waldoMode' in scoreData) {
          levelScores.push(score);
        }
      } else {
        if (!('waldoMode' in scoreData)) {
          levelScores.push(score);
        }
      }
    });
    const leaderboard = levelScores.map(score => score.data());
    const newLevelScores = leaderboard.sort((a, b) => {
      return a.time - b.time;
    });

    setLevelScores(newLevelScores);
  }

  function difficultyToggle() {
    props.setWaldoMode(!props.waldoMode);
  }

  return (
    <MainContainer>
      <figure id='scoresImg'>
        <img src={CharacterBanner} alt='Characters' />
      </figure>
      <h2>High Scores</h2>

      <HighScoresContainer>
        <h3>Choose a level!</h3>

        <HighScoresContainerRow waldoMode={props.waldoMode}>
          <figure onClick={() => handleClick('Gobbling Gluttons')}>
            <figcaption>
              <b>Gobbling Gluttons</b>
            </figcaption>
            <img src={GobblingGluttons} alt='Gobbling Gluttons' />
          </figure>

          <figure onClick={() => handleClick('Ski Resort')}>
            <figcaption>
              <b>Ski Resort</b>
            </figcaption>
            <img src={SkiResort} alt='Ski Resort' />
          </figure>

          <figure onClick={() => handleClick('Toys! Toys! Toys!')}>
            <figcaption>
              <b>Toys! Toys! Toys!</b>
            </figcaption>
            <img src={ToysToysToys} alt='Toys! Toys! Toys!' />
          </figure>
        </HighScoresContainerRow>
      </HighScoresContainer>

      <table ref={leaderboard} id='leaderboard'>
        <caption>
          {props.level ? (
            <DifficultyGrid>
              <h3>{props.level}</h3>

              <SwitchContainer waldoMode={props.waldoMode}>
                <label htmlFor='checkbox'>
                  {props.waldoMode ? 'Waldo' : 'Challenge'} Mode
                </label>
                <label className='switch'>
                  <input
                    onClick={difficultyToggle}
                    type='checkbox'
                    id='checkbox'
                  />
                  <span></span>
                </label>
              </SwitchContainer>
            </DifficultyGrid>
          ) : (
            <DifficultyGrid>
              <h3>Choose a level first!</h3>

              <SwitchContainer waldoMode={props.waldoMode}>
                <label htmlFor='checkbox'>
                  {props.waldoMode ? 'Waldo' : 'Challenge'} Mode
                </label>
                <label className='switch'>
                  <input
                    onClick={difficultyToggle}
                    type='checkbox'
                    id='checkbox'
                  />
                  <span></span>
                </label>
              </SwitchContainer>
            </DifficultyGrid>
          )}
        </caption>
        <thead>
          <tr>
            <th className='rank'>Rank</th>
            <th className='username'>Username</th>
            <th className='time'>Time</th>
          </tr>
        </thead>

        <tbody>
          {levelScores.map((score, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{score.username}</td>
                <td>
                  <span>
                    {Math.floor((score.time / 60000) % 60)
                      .toString()
                      .slice(-2)}
                    :
                  </span>
                  <span>
                    {('0' + Math.floor((score.time / 1000) % 60)).slice(-2)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </MainContainer>
  );
}
