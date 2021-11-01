import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { collection, getDocs } from 'firebase/firestore';

import SelectionMenu from './SelectionMenu';

import { GameContainer } from './styles/GameContainer.styled';
import { ContextMenu, TargetingBox } from './styles/ContextMenu.styled';
import { db } from '../index';

export interface Coords {
  x: number,
  y: number,
};

interface GameProps {
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  img: string, level: string;
};

export default function WaldoGame(props: GameProps) {

  const [mouseCoords, setMouseCoords] = useState({x:0,y:0});
  const [menuCoords, setMenuCoords] = useState({x:0,y:0});
  const [isContextOpen, setIsContextOpen] = useState(false);
  const [isOdlawFound, setIsOdlawFound] = useState(false);
  const [isWaldoFound, setIsWaldoFound] = useState(false);
  const [isWendaFound, setIsWendaFound] = useState(false);
  const [isWizardFound, setIsWizardFound] = useState(false);
  const [characters, setCharacters] = useState<string[]>([]);

  const history = useHistory();
  const firstRender = useRef(true);

  useEffect(() => {

    if (firstRender.current) {
      firstRender.current = false;
      return;
    };

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
  
      };
  
    };
  
    if (gameOver.includes(false)) {
  
      return;
  
    } else {
  
      return props.setIsGameOver(true);
  
    };
    
  }, [isOdlawFound, isWaldoFound, isWendaFound, isWizardFound]);

  useEffect((): void => {
    
    resetCharacters();
    getCharacters();

  }, [history.location]);

  function resetCharacters() {
    setIsOdlawFound(false);
    setIsWaldoFound(false);
    setIsWendaFound(false);
    setIsWizardFound(false);
  };

  async function getCharacters() {
    const characterList = await getDocs(collection(db, props.level));
    const characters: string[] = [];
    characterList.forEach(character=>{
      characters.push(character.id);
    });
    setCharacters(characters);
};

  function getMouseCoords(e: any) {
    const { width, height }: { width: number; height: number; } = e.target.getBoundingClientRect();
    const { offsetX, offsetY }: { offsetX: number; offsetY: number; } = e.nativeEvent;

    const mouseX = (Math.round((offsetX / width) * 1000));
    const mouseY = (Math.round((offsetY / height) * 1000));
    const { pageX: menuX, pageY: menuY }: { pageX: number, pageY: number } = e;

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
  };

  async function handleClick(e: any) {
    getMouseCoords(e);
    setIsContextOpen(!isContextOpen);
  };

  return (
    <GameContainer>
      {isContextOpen
        ? <ContextMenu menuCoords={menuCoords} >
            <TargetingBox onClick={handleClick} menuCoords={menuCoords} />
            <SelectionMenu isContextMenuOpen={isContextOpen} setIsContextMenuOpen={setIsContextOpen}
              img={props.img} level={props.level} characters={characters} mouseCoords={mouseCoords}
              isOdlawFound={isOdlawFound} setIsOdlawFound={setIsOdlawFound}
              isWaldoFound={isWaldoFound} setIsWaldoFound={setIsWaldoFound}
              isWendaFound={isWendaFound} setIsWendaFound={setIsWendaFound}
              isWizardFound={isWizardFound} setIsWizardFound={setIsWizardFound} />
            </ContextMenu>
        : null}
      <img onClick={handleClick} src={props.img} draggable="false" alt="Where's Waldo?" />
    </GameContainer>
  );
};