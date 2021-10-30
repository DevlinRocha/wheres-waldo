import { Container, ContainerRow } from './styles/Container.styled';

import WheresWaldo from '../assets/Where\'sWaldo.png';
import Odlaw from '../assets/Odlaw.png';
import Waldo from '../assets/Waldo.png';
import Wenda from '../assets/Wenda.png';
import Wizard from '../assets/WizardWhitebeard.png';

export default function HomePage() {
    return(
        <Container>

            <figure>
                <img src={WheresWaldo} alt="Where's Waldo?" />
                <figcaption>Welcome to Where's Waldo!</figcaption>
            </figure>

            <Container>

                <p>Look for these characters!</p>

                <ContainerRow>

                    <figure>
                        <figcaption>Waldo</figcaption>
                        <img src={Waldo} alt='Waldo' />
                    </figure>

                    <figure>
                        <figcaption>Wenda</figcaption>
                        <img src={Wenda} alt='Wenda' />
                    </figure>

                    <figure>
                        <figcaption>Wizard</figcaption>
                        <img src={Wizard} alt='Wizard' />
                    </figure>

                    <figure>
                        <figcaption>Odlaw</figcaption>
                        <img src={Odlaw} alt='Odlaw' />
                    </figure>

                </ContainerRow>
            </Container>
        </Container>
    );
};