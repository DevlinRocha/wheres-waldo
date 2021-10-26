import { useState } from 'react';
import ContextMenu from './ContextMenu';
import waldo from '../assets/Where\'s Waldo Gobbling Gluttons.jpg';
import { GameContainer } from './styles/GameContainer.styled';

export interface Coords {
  x: number,
  y: number,
};

export default function WaldoGame() {

  const [mouseCoords, setMouseCoords] = useState({x:0,y:0});
  const [menuCoords, setMenuCoords] = useState({x:0,y:0});
  const [isContextOpen, setIsContextOpen] = useState(false);
  const [isOdlawFound, setIsOdlawFound] = useState(false);
  const [isWaldoFound, setIsWaldoFound] = useState(false);
  const [isWendaFound, setIsWendaFound] = useState(false);
  const [isWizardFound, setIsWizardFound] = useState(false);

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

    console.log(mouseCoords);

    setMouseCoords(mouseCoords);
    setMenuCoords(menuCoords);
  };

  async function handleClick(e: any) {
    getMouseCoords(e);
    setIsContextOpen(!isContextOpen);
  };

  return (
    <GameContainer menuCoords={menuCoords}>
      {isContextOpen
        ? <ContextMenu isContextMenuOpen={isContextOpen} setIsContextMenuOpen={setIsContextOpen}
            mouseCoords={mouseCoords}
            isOdlawFound={isOdlawFound} setIsOdlawFound={setIsOdlawFound}
            isWaldoFound={isWaldoFound} setIsWaldoFound={setIsWaldoFound}
            isWendaFound={isWendaFound} setIsWendaFound={setIsWendaFound}
            isWizardFound={isWizardFound} setIsWizardFound={setIsWizardFound} />
        : null}
      <img onClick={handleClick} src={waldo} draggable="false" alt="Where's Waldo?" />
    </GameContainer>
  );
};