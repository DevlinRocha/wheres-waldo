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

    button {
        cursor: pointer;
        color: white;
        background-color: ${props=>props.theme.colors.primary};
        padding: 5px;
        border-radius: 7px;
        border: inherit;
        font: inherit;
    }
`