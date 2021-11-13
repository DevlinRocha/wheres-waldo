import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';

import { MainContainer } from './styles/GameOverContainer.styled';

import WaldoFound from '../assets/WaldoFound.png';

import { db } from '../index';

interface GameOverProps {
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  level: string;
  waldoMode: boolean;
}

export default function GameOver(props: GameOverProps) {
  const history = useHistory();

  const usernameRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    props.setIsGameOver(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    history.push({
      pathname: '/high-scores',
      state: {
        level: props.level,
      },
    });
    const username = usernameRef.current!.value;

    if (props.waldoMode) {
      try {
        await addDoc(collection(db, 'Levels', props.level, 'High Scores'), {
          username: username,
          time: props.time,
          waldoMode: true,
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      try {
        await addDoc(collection(db, 'Levels', props.level, 'High Scores'), {
          username: username,
          time: props.time,
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  }

  return (
    <MainContainer>
      <figure>
        <img src={WaldoFound} alt='You found Waldo!' />
        <figcaption>You found Waldo!</figcaption>
      </figure>

      <form onSubmit={handleSubmit}>
        <h3>
          You completed <b>{props.level}</b> in{' '}
          <b>{props.time / 1000} seconds!</b>
        </h3>

        <fieldset>
          <legend>Enter your name to save your score!</legend>

          <label htmlFor='username'>Username</label>
          <input ref={usernameRef} type='text' id='username'></input>
        </fieldset>

        <input id='submitButton' type='submit' value='Submit'></input>
      </form>

      <button onClick={handleClick}>Play Again</button>
    </MainContainer>
  );
}
