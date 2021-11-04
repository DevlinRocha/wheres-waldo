import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../index';
import { DocumentData } from '@firebase/firestore-types';

import { MainContainer, HighScoresContainer, HighScoresContainerRow } from './styles/HighScoresContainer.styled';

import CharacterBanner from '../assets/CharacterBanner.png';

import GobblingGluttons from '../assets/GobblingGluttons.jpg';
import SkiResort from '../assets/SkiResort.png';

export default function HighScores() {

    const [level, setLevel] = useState('Ski Resort');

    const [levelScores, setLevelScores] = useState<DocumentData[]>([]);

    useEffect(() => {
        getLevelScores();
    }, []);

    function handleClick(level: string): void {
        setLevel(level);
        getLevelScores();
    };

    async function getLevelScores() {
        const querySnapshot = await getDocs(collection(db, 'Levels', level, 'High Scores'));
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

                <tbody>
                    {levelScores.map(score => {
                        const data = score.data();
                        return (
                            <tr key={data.username} >
                                <td>{data.username}</td>
                                <td>{data.time}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </MainContainer>
    );
};