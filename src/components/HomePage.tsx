import { MainContainer, HomeContainer, HomeContainerRow } from './styles/HomeContainer.styled';

import WheresWaldo from '../assets/Where\'sWaldo.png';
import Odlaw from '../assets/characters/Odlaw.png';
import Waldo from '../assets/characters/Waldo.png';
import Wenda from '../assets/characters/Wenda.png';
import Wizard from '../assets/characters/WizardWhitebeard.png';

export default function HomePage() {
    return (
        <MainContainer>

            <figure>
                <img src={WheresWaldo} alt="Where's Waldo?" />
            </figure>

            <HomeContainer>

                <h3><u>Look for these characters!</u></h3>

                <HomeContainerRow>

                    <figure>
                        <figcaption><b>Waldo</b></figcaption>
                        <img src={Waldo} alt='Waldo' />
                    </figure>

                    <figure>
                        <figcaption><b>Wenda</b></figcaption>
                        <img src={Wenda} alt='Wenda' />
                    </figure>

                    <figure>
                        <figcaption><b>Wizard Whitebeard</b></figcaption>
                        <img src={Wizard} alt='Wizard' />
                    </figure>

                    <figure>
                        <figcaption><b>Odlaw</b></figcaption>
                        <img src={Odlaw} alt='Odlaw' />
                    </figure>

                </HomeContainerRow>
            </HomeContainer>
        </MainContainer>
    );
};