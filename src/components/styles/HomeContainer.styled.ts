import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: auto;
    text-align: center;

    img {
        height: clamp(25vh, 35vh, 35vh);
        width: auto;
        padding: 16px 0;
        object-fit: contain;
    }

    h3 {
        color: ${props=>props.theme.colors.secondary};
        color: white;
        padding: 8px;
        background-color: ${props=>props.theme.colors.primary};
        border-radius: 7px;
    }
`

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: auto;

    figure {
        gap: 16px;
    }

    figcaption {
        color: ${props=>props.theme.colors.secondary};
        color: white;
        padding: 8px;
        background-color: ${props=>props.theme.colors.secondary};
        border-radius: 7px;
    }
`

export const HomeContainerRow = styled(HomeContainer)`
    flex-direction: row;
    padding: 32px 16px 0;
    justify-content: space-around;
`