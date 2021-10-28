import { Container } from './styles/Container.styled';

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
                <p>Game over!</p>
                <button onClick={handleClick}>Play Again</button>
            </section>
        </Container>
    );
};