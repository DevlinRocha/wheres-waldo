import { MainContainer } from './styles/GameOverContainer.styled';

import WaldoFound from '../assets/WaldoFound.png';

interface GameOverProps {
    isGameOver: boolean, setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GameOver(props: GameOverProps) {

    function handleClick() {
        props.setIsGameOver(false);
    };

    return(
        <MainContainer>
            
                <figure>
                    <img src={WaldoFound} alt='You found Waldo!' />
                    <figcaption>You found Waldo!</figcaption>
                </figure>

                <button onClick={handleClick}>Play Again</button>
        </MainContainer>
    );
};