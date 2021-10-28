import { Container } from './styles/Container.styled';

import WaldoFound from '../assets/Waldo Found.png';

interface GameOverProps {
    isGameOver: boolean, setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GameOver(props: GameOverProps) {

    function handleClick() {
        props.setIsGameOver(false);
    };

    return(
        <Container>
            <section>

                <figure>
                    <img src={WaldoFound} alt='You found Waldo!' />
                    <figcaption>You found Waldo!</figcaption>
                </figure>

                <button onClick={handleClick}>Play Again</button>

            </section>
        </Container>
    );
};