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
        <button onClick={handleClick} >Level Select</button>
        <ul>
            <NavLink onClick={switchLevel} exact to='/gobbling-gluttons'><li>Gobbling Gluttons</li></NavLink>
            <NavLink onClick={switchLevel} exact to='/ski-resort'><li>Ski Resort</li></NavLink>
        </ul>
        </DropDown>
    );
};