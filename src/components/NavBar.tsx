import { Link } from 'react-router-dom';
import { Nav } from "./styles/Nav.styled"

import LevelSelect from './LevelSelect';

interface NavProps {
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar(props: NavProps) {

    function handleClick() {
        props.setIsGameOver(false);
    };

    return(
        <Nav>
            <h1 onClick={handleClick} ><Link to='/'>Where's Waldo?</Link></h1>

            <LevelSelect setIsGameOver={props.setIsGameOver} />
            
        </Nav>
    );
};