import styled from "styled-components";

export const GameContainer = styled.section`
    display: flex;
    user-select: none;
    width: 100%;
    height: auto;

    img {
        --webkit-user-drag: none;
        object-fit: contain;
        width: 100%;
        height: auto;
    }
`;