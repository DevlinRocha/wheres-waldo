import { Link, NavLink } from 'react-router-dom';
import { Nav } from "./styles/Nav.styled"

interface NavProps {
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar(props: NavProps) {

    function handleClick() {
        console.log('Reset Game');
        props.setIsGameOver(false);
    };

    return(
        <Nav>
            <h1 onClick={handleClick} ><Link to='/'>Where's Waldo?</Link></h1>
            <ul>
                <li onClick={handleClick} ><NavLink exact to='/gobbling-gluttons'>Gobbling Gluttons</NavLink></li>
                <li onClick={handleClick} ><NavLink exact to='/ski-resort'>Ski Resort</NavLink></li>
            </ul>
        </Nav>
    );
};