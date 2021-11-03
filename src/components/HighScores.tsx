import { useState } from 'react';

import { MainContainer, HighScoresContainer, HighScoresContainerRow } from './styles/HighScoresContainer.styled';

import CharacterBanner from '../assets/CharacterBanner.png';

import GobblingGluttons from '../assets/GobblingGluttons.jpg';
import SkiResort from '../assets/SkiResort.png';

export default function HighScores() {

    const [level, setLevel] = useState();

    function handleClick(level: string): void {
        console.log(level);
    };

    return (
        <MainContainer>
            <figure>
                <img src={CharacterBanner} alt='Characters' />
            </figure>
                <h2>High Scores</h2>

                <HighScoresContainer>

                    <h3>Choose a level!</h3>

                    <HighScoresContainerRow>

                        <figure onClick={()=>handleClick('GobblingGluttons')} >
                            <figcaption><b>Gobbling Gluttons</b></figcaption>
                            <img src={GobblingGluttons} alt='Gobbling Gluttons' />
                        </figure>

                        <figure onClick={()=>handleClick('SkiResort')}>
                            <figcaption><b>Ski Resort</b></figcaption>
                            <img src={SkiResort} alt='Ski Resort' />
                        </figure>

                    </HighScoresContainerRow>
                </HighScoresContainer>

            <table>
                <caption>{level}</caption>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Time</th>
                    </tr>
                </thead>
            </table>
        </MainContainer>
    );
};