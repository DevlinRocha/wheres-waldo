import styled from 'styled-components';

export const MainContainer = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: white;
    gap: 64px;
    width: 100%;
    height: auto;
    text-align: center;

    figure {
        height: clamp(15vh, 35vh, 35vh);
        width: auto;
    }

    figcaption {
        padding: 16px 0 0 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    table {
        width: 100%;

        caption, th, td {
            padding: 16px;
        }
    }

    /* button {
        cursor: pointer;
        color: white;
        background-color: ${props=>props.theme.colors.primary};
        padding: 5px;
        border-radius: 7px;
        border: inherit;
        font: inherit;
    } */
`

export const HighScoresContainer = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    figcaption {
        color: ${props=>props.theme.colors.secondary};
        padding: 8px;
        width: clamp(auto, 50%, auto);
    }
`

export const HighScoresContainerRow = styled(HighScoresContainer)`

    flex-direction: row;
    justify-content: space-around;
    background-color: white;
    gap: 8px;
    padding: 32px 0 0;

    figure {
        width: clamp(15vw, 100%, 25vw);
        height: clamp(10vh, 25vh, 35vh);

        a {
            text-decoration: none;
            width: 100%;
            height: 100%;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }
`