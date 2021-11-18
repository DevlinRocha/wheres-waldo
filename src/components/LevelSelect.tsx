import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Level } from '../App';

import { DropDown } from './styles/DropDown.styled';

interface LevelSelectProps {
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  levelList: Level[];
}

export default function LevelSelect(props: LevelSelectProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  function handleClick() {
    setIsDropDownOpen(!isDropDownOpen);
  }

  function switchLevel() {
    props.setIsGameOver(false);
    setIsDropDownOpen(false);
  }

  return (
    <DropDown isDropDownOpen={isDropDownOpen}>
      <button onClick={handleClick}>Level Select</button>
      <ul id='levelList'>
        {props.levelList.map((level: any, index) => {
          return (
            <NavLink onClick={switchLevel} exact to={level.path}>
              <li>{level.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </DropDown>
  );
}
