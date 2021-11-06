import { MainContainer } from './styles/GameOverContainer.styled';

import WaldoFound from '../assets/WaldoFound.png';

interface GameOverProps {
    isGameOver: boolean, setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    time: number;
    level: string;
};

export default function GameOver(props: GameOverProps) {

    function handleClick() {
        props.setIsGameOver(false);
    };

    function handleSubmit() {
        console.log('Success');
    };

    return(
        <MainContainer>
            <figure>
                <img src={WaldoFound} alt='You found Waldo!' />
                <figcaption>You found Waldo!</figcaption>
            </figure>

            <form onSubmit={handleSubmit} >

                    <h3>You completed <b>{props.level}</b> in <b>{props.time / 1000} seconds!</b></h3>

                    <fieldset>

                        <legend>Enter your name to save your score!</legend>

                        <label htmlFor='firstName'>Username</label>
                        <input type='text' id='firstName' name='firstName'></input>

                    </fieldset>

                    <input id='submitButton' type='submit' value='Submit' ></input>

                </form>

                <button onClick={handleClick}>Play Again</button>
        </MainContainer>
    );
};