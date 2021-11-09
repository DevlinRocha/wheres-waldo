import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../index';
import { DocumentData } from '@firebase/firestore-types';

import { MainContainer, HighScoresContainer, HighScoresContainerRow } from './styles/HighScoresContainer.styled';

import CharacterBanner from '../assets/CharacterBanner.png';

import GobblingGluttons from '../assets/levels/GobblingGluttons.jpg';
import SkiResort from '../assets//levels/SkiResort.png';
import ToysToysToys from '../assets/levels/ToysToysToys.jpg';

import { useLocation } from 'react-router';

interface LocationState {
    state: {
        level: string;
    };
};

interface HighScoreProps {
    level: string | undefined;
    setLevel: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export default function HighScores(props: HighScoreProps) {

    const [levelScores, setLevelScores] = useState<DocumentData[]>([]);

    const location: LocationState = useLocation();

    useEffect(() => {
        try {
            const newLevel = location.state.level;
            props.setLevel(newLevel);
        } catch {
            void(0);
        };
    }, []);

    useEffect(() => {
        props.level ? getLevelScores(props.level) : void(0);
    }, [props.level])

    function handleClick(newLevel: string): void {
        props.setLevel(newLevel);
    };

    async function getLevelScores(newLevel: string) {
        const querySnapshot = await getDocs(collection(db, 'Levels', newLevel, 'High Scores'));
        const levelScores: any[] = [];
        querySnapshot.forEach(score => {
            levelScores.push(score);
        });
        setLevelScores(levelScores);
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

                        <figure onClick={()=>handleClick('Gobbling Gluttons')} >
                            <figcaption><b>Gobbling Gluttons</b></figcaption>
                            <img src={GobblingGluttons} alt='Gobbling Gluttons' />
                        </figure>

                        <figure onClick={()=>handleClick('Ski Resort')}>
                            <figcaption><b>Ski Resort</b></figcaption>
                            <img src={SkiResort} alt='Ski Resort' />
                        </figure>

                        <figure onClick={()=>handleClick('Toys! Toys! Toys!')}>
                            <figcaption><b>Toys! Toys! Toys!</b></figcaption>
                            <img src={ToysToysToys} alt='Toys! Toys! Toys!' />
                        </figure>

                    </HighScoresContainerRow>
                </HighScoresContainer>

            {props.level
            ?
            <table>
                <caption><h4>{props.level}</h4></caption>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Time</th>
                    </tr>
                </thead>

                <tbody>
                    {levelScores.map((score, index) => {
                        const data = score.data();
                        return (
                            <tr key={index} >
                                <td>{data.username}</td>
                                <td><span>{(Math.floor((data.time/60000)%60)).toString().slice(-2)}:</span><span>{("0"+Math.floor((data.time/1000)%60)).slice(-2)}</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            : null}
        </MainContainer>
    );
};