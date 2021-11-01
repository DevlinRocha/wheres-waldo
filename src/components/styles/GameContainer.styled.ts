import styled from "styled-components";

export const GameContainer = styled.main`
    display: flex;
    user-select: none;
    width: 100%;
    height: auto;

    img {
        --webkit-user-drag: none;
        object-fit: contain;
        width: 100%;
        height: auto;
        border: 7px solid ${props=>props.theme.colors.secondary};
        border-radius: 7px;
    }
`;