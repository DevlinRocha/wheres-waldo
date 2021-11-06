import { Link } from 'react-router-dom';
import { Nav } from "./styles/Nav.styled"

import Timer from './Timer';
import LevelSelect from './LevelSelect';

interface NavProps {
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    isGameOn: boolean, setIsGameOn: React.Dispatch<React.SetStateAction<boolean>>;
    time: number, setTime: React.Dispatch<React.SetStateAction<number>>;
    isTimerOn: boolean, setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
    isGameOver: boolean;
};

export default function NavBar(props: NavProps) {

    function handleClick() {
        props.setIsGameOver(false);
        props.setIsGameOn(false);
    };

    return(
        <Nav>
            <h1 onClick={handleClick} ><Link to='/'><span id='first'>Where's</span> <span id='second'>Waldo?</span></Link></h1>

            {props.isGameOn ? <Timer time={props.time} setTime={props.setTime} isTimerOn={props.isTimerOn} setIsTimerOn={props.setIsTimerOn} isGameOver={props.isGameOver} /> : null}

            <section>
                <LevelSelect setIsGameOver={props.setIsGameOver} />
                <Link onClick={handleClick} to='/high-scores'><button>High Scores</button></Link>
            </section>
        </Nav>
    );
};