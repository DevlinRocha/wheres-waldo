import styled from "styled-components";

export const GameContainer = styled.main`
    display: flex;
    user-select: none;
    width: 100%;
    height: auto;

    figure {
        text-align: center;
    }

    figcaption {
        padding: 8px;
    }

    img {
        --webkit-user-drag: none;
        object-fit: contain;
        width: 100%;
        height: auto;
        border: 7px solid ${props=>props.theme.colors.secondary};
        border-radius: 7px;
    }
`;