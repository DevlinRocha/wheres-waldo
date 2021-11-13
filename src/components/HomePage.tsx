import { Link } from 'react-router-dom';

import { MainContainer, HomeContainer, HomeContainerRow, HomeGrid, SwitchContainer } from './styles/HomeContainer.styled';

import WheresWaldo from '../assets/Where\'sWaldo.png';

import GobblingGluttons from '../assets/levels/GobblingGluttons.jpg';
import SkiResort from '../assets/levels/SkiResort.png';
import ToysToysToys from '../assets/levels/ToysToysToys.jpg';

import Odlaw from '../assets/characters/Odlaw.png';
import Waldo from '../assets/characters/Waldo.png';
import Wenda from '../assets/characters/Wenda.png';
import Wizard from '../assets/characters/WizardWhitebeard.png';
import Woof from '../assets/characters/Woof.png';

import Binoculars from '../assets/items/Binoculars.png';
import Bone from '../assets/items/Bone.png';
import Camera from '../assets/items/Camera.png';
import Key from '../assets/items/Key.png';
import Scroll from '../assets/items/Scroll.png';

interface HomePageProps {
    waldoMode: boolean;
};

export default function HomePage(props: HomePageProps) {
    return (
        <MainContainer>

            <figure id='homeLogo'>
                <img src={WheresWaldo} alt="Where's Waldo?" />
            </figure>

            <HomeContainer>

                <HomeGrid>

                <h3>Choose a level!</h3>

                <SwitchContainer>
                    <label htmlFor="checkbox">Waldo Mode</label>
                    <label className="switch">
                        <input type="checkbox" id="checkbox" />
                        <span></span>
                    </label>
                </SwitchContainer>

                </HomeGrid>

                <HomeContainerRow>

                    <Link to='/gobbling-gluttons'>
                        <figure>
                            <figcaption><b>Gobbling Gluttons</b></figcaption>
                            <img src={GobblingGluttons} alt='Gobbling Gluttons' />
                        </figure>
                    </Link>

                    <Link to='/ski-resort'>
                        <figure>
                            <figcaption><b>Ski Resort</b></figcaption>
                            <img src={SkiResort} alt='Ski Resort' />
                        </figure>
                    </Link>

                    <Link to='/toys-toys-toys'>
                        <figure>
                            <figcaption><b>Toys! Toys! Toys!</b></figcaption>
                            <img src={ToysToysToys} alt='Toys! Toys! Toys!' />
                        </figure>
                    </Link>

                </HomeContainerRow>
                </HomeContainer>

            <HomeContainer>

                <h3>Look for these characters!</h3>

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
                        <figcaption><b>Wizard</b></figcaption>
                        <img src={Wizard} alt='Wizard' />
                    </figure>

                    <figure>
                        <figcaption><b>Odlaw</b></figcaption>
                        <img src={Odlaw} alt='Odlaw' />
                    </figure>

                    <figure>
                        <figcaption><b>Woof</b></figcaption>
                        <img src={Woof} alt='Woof' />
                    </figure>

                </HomeContainerRow>
            </HomeContainer>

            <HomeContainer>

                <h3>Find these items!</h3>

                <HomeContainerRow>

                    <figure>
                        <figcaption><b>Binoculars</b></figcaption>
                        <img src={Binoculars} alt='Binoculars' />
                    </figure>

                    <figure>
                        <figcaption><b>Bone</b></figcaption>
                        <img src={Bone} alt='Bone' />
                    </figure>

                    <figure>
                        <figcaption><b>Camera</b></figcaption>
                        <img src={Camera} alt='Camera' />
                    </figure>

                    <figure>
                        <figcaption><b>Key</b></figcaption>
                        <img src={Key} alt='Key' />
                    </figure>

                    <figure>
                        <figcaption><b>Scroll</b></figcaption>
                        <img src={Scroll} alt='Scroll' />
                    </figure>

                </HomeContainerRow>
            </HomeContainer>
        </MainContainer>
    );
};