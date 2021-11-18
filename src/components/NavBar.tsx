import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Timer from './Timer';
import LevelSelect from './LevelSelect';

import { Level } from '../App';

import { Nav } from './styles/Nav.styled';

interface NavProps {
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  isGameOn: boolean;
  setIsGameOn: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerOn: boolean;
  setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
  isGameOver: boolean;
  setLevel: React.Dispatch<React.SetStateAction<string | undefined>>;
  levelList: Level[];
}

export default function NavBar(props: NavProps) {
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      if (history.action === 'POP') {
        handleClick();
      }
    });
  });

  function handleClick() {
    props.setIsGameOver(false);
    props.setIsGameOn(false);
    props.setLevel(undefined);
  }

  return (
    <Nav id='nav'>
      <h1 onClick={handleClick}>
        <Link to='/'>
          <span id='first'>Where's</span> <span id='second'>Waldo?</span>
        </Link>
      </h1>

      {props.isGameOn ? (
        <Timer
          time={props.time}
          setTime={props.setTime}
          isTimerOn={props.isTimerOn}
          setIsTimerOn={props.setIsTimerOn}
          isGameOver={props.isGameOver}
        />
      ) : null}

      <section>
        <LevelSelect
          setIsGameOver={props.setIsGameOver}
          levelList={props.levelList}
        />
        <Link onClick={handleClick} to='/high-scores'>
          <button>High Scores</button>
        </Link>
      </section>
    </Nav>
  );
}
