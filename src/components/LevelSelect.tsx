import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { DropDown } from './styles/DropDown.styled';

interface LevelSelectProps {
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LevelSelect(props: LevelSelectProps) {
    
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    function handleClick() {
        setIsDropDownOpen(!isDropDownOpen);
    };

    function switchLevel() {
        props.setIsGameOver(false);
        setIsDropDownOpen(false);
    };

    return(
        <DropDown isDropDownOpen={isDropDownOpen} >
        <p onClick={handleClick} >Level Select</p>
        <ul>
            <li onClick={switchLevel} ><NavLink exact to='/gobbling-gluttons'>Gobbling Gluttons</NavLink></li>
            <li onClick={switchLevel} ><NavLink exact to='/ski-resort'>Ski Resort</NavLink></li>
        </ul>
        </DropDown>
    );
};