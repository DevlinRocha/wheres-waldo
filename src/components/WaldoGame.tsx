import { useState } from 'react';
import { Firestore } from 'firebase/firestore';
import ContextMenu from './ContextMenu';
import waldo from '../assets/Where\'s Waldo Gobbling Gluttons.jpg';
import { GameContainer } from './styles/GameContainer.styled';

interface Coords {
  x: number,
  y: number,
};

interface GameProps {
  db: Firestore,
};

export default function WaldoGame(props: GameProps) {

  const [mouseCoords, setMouseCoords] = useState({x:0,y:0});
  const [menuCoords, setMenuCoords] = useState({x:0,y:0});
  const [isContextOpen, setIsContextOpen] = useState(false);

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
    <GameContainer menuCoords={menuCoords}>
      {isContextOpen ? <ContextMenu isContextMenuOpen={isContextOpen} setIsContextMenuOpen={setIsContextOpen} mouseCoords={mouseCoords} db={props.db}  /> : null}
      <img onClick={handleClick} src={waldo} alt="Where's Waldo?" />
    </GameContainer>
  );
};