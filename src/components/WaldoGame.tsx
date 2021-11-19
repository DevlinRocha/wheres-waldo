import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { collection, getDocs } from 'firebase/firestore';

import Notification from './Notification';
import SelectionMenu from './SelectionMenu';

import { GameContainer, PauseScreen } from './styles/GameContainer.styled';
import { ContextMenu, TargetingBox } from './styles/ContextMenu.styled';
import { db } from '../index';

export interface Coords {
  x: number;
  y: number;
}

export interface NotificationState {
  isNotificationOpen: boolean;
  character: string;
  isCharacterFound: boolean;
  timer: NodeJS.Timeout;
}

interface GameProps {
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  isGameOn: boolean;
  setIsGameOn: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerOn: boolean;
  setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
  level: string;
  waldoMode: boolean;
}

export default function WaldoGame(props: GameProps) {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
  const [isContextOpen, setIsContextOpen] = useState(false);
  const [isOdlawFound, setIsOdlawFound] = useState(false);
  const [isWaldoFound, setIsWaldoFound] = useState(false);
  const [isWendaFound, setIsWendaFound] = useState(false);
  const [isWizardFound, setIsWizardFound] = useState(false);
  const [isWoofFound, setIsWoofFound] = useState(false);
  const [character, setCharacter] = useState('');
  const [characters, setCharacters] = useState<string[]>([]);
  const [notificationData, setNotificationData] = useState<NotificationState>({
    isNotificationOpen: false,
    character: '',
    isCharacterFound: false,
    timer: setTimeout(() => {}, 0),
  });

  const history = useHistory();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      props.setIsGameOn(true);
      return;
    }

    let gameOver: boolean[] = [];

    for (let character in characters) {
      switch (characters[character]) {
        case 'Odlaw':
          gameOver.push(isOdlawFound);
          break;

        case 'Waldo':
          gameOver.push(isWaldoFound);
          break;

        case 'Wenda':
          gameOver.push(isWendaFound);
          break;

        case 'Wizard':
          gameOver.push(isWizardFound);
          break;
      }
    }

    if (props.waldoMode) {
      if (isWaldoFound) {
        props.setIsTimerOn(false);
        props.setIsGameOn(false);
        return props.setIsGameOver(true);
      }
    } else {
      if (gameOver.includes(false)) {
        return;
      } else {
        props.setIsTimerOn(false);
        props.setIsGameOn(false);
        return props.setIsGameOver(true);
      }
    }
  }, [isOdlawFound, isWaldoFound, isWendaFound, isWizardFound]);

  useEffect((): void => {
    resetCharacters();
    getCharacters();
    props.setTime(0);
  }, [history.location]);

  function resetCharacters() {
    setIsOdlawFound(false);
    setIsWaldoFound(false);
    setIsWendaFound(false);
    setIsWizardFound(false);
    setIsWoofFound(false);
  }

  async function getCharacters() {
    const characterList = await getDocs(
      collection(db, 'Levels', props.level, 'Coordinates')
    );
    const characters: string[] = [];
    characterList.forEach(character => {
      characters.push(character.id);
    });

    props.waldoMode ? setCharacter('Waldo') : setCharacters(characters);
  }

  function getMouseCoords(e: any) {
    const { width, height }: { width: number; height: number } =
      e.target.getBoundingClientRect();
    const { offsetX, offsetY }: { offsetX: number; offsetY: number } =
      e.nativeEvent;

    const mouseX = Math.round((offsetX / width) * 1000);
    const mouseY = Math.round((offsetY / height) * 1000);
    const { pageX: menuX, pageY: menuY }: { pageX: number; pageY: number } = e;

    const menuCoords: Coords = {
      x: menuX,
      y: menuY,
    };

    const mouseCoords: Coords = {
      x: mouseX,
      y: mouseY,
    };

    setMouseCoords(mouseCoords);
    setMenuCoords(menuCoords);
  }

  async function handleClick(e: any) {
    getMouseCoords(e);
    props.isTimerOn
      ? setIsContextOpen(!isContextOpen)
      : props.setIsTimerOn(!props.isTimerOn);
  }

  return (
    <GameContainer isTimerOn={props.isTimerOn} waldoMode={props.waldoMode}>
      {notificationData.isNotificationOpen ? (
        <Notification notificationData={notificationData} />
      ) : null}
      {props.isTimerOn ? null : (
        <PauseScreen
          onClick={() => props.setIsTimerOn(!props.isTimerOn)}
          isNotificationOpen={notificationData.isNotificationOpen}
        >
          Game is paused
        </PauseScreen>
      )}
      {isContextOpen ? (
        <ContextMenu menuCoords={menuCoords}>
          <TargetingBox onClick={handleClick} menuCoords={menuCoords} />
          <SelectionMenu
            isContextMenuOpen={isContextOpen}
            setIsContextMenuOpen={setIsContextOpen}
            notificationData={notificationData}
            setNotificationData={setNotificationData}
            img={props.img}
            level={props.level}
            character={character}
            characters={characters}
            mouseCoords={mouseCoords}
            isOdlawFound={isOdlawFound}
            setIsOdlawFound={setIsOdlawFound}
            isWaldoFound={isWaldoFound}
            setIsWaldoFound={setIsWaldoFound}
            isWendaFound={isWendaFound}
            setIsWendaFound={setIsWendaFound}
            isWizardFound={isWizardFound}
            setIsWizardFound={setIsWizardFound}
            isWoofFound={isWoofFound}
            setIsWoofFound={setIsWoofFound}
            waldoMode={props.waldoMode}
          />
        </ContextMenu>
      ) : null}
      <figure>
        <figcaption>
          <h3>{props.level}</h3>
        </figcaption>
        <img
          onClick={handleClick}
          src={props.img}
          draggable='false'
          alt="Where's Waldo?"
        />
      </figure>
    </GameContainer>
  );
}
