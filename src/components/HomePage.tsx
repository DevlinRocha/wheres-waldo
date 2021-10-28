import { Container } from './styles/Container.styled';

import WheresWaldo from '../assets/Where\'s Waldo.png';

export default function HomePage() {
    return(
        <Container>
            <figure>
                <img src={WheresWaldo} alt="Where's Waldo?" />
                <figcaption>Welcome to Where's Waldo!</figcaption>
            </figure>
            <section>
                <p>Choose a game to play!</p>
            </section>
        </Container>
    );
};