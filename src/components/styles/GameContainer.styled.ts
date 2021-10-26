import styled from "styled-components";

interface StyleProps {
    menuCoords: {
        x: number;
        y: number;
    };
};

export const GameContainer = styled.section<StyleProps>`
    ul {
        left: ${props=>props.menuCoords.x+1}px;
        top: ${props=>props.menuCoords.y}px;
        color: cyan;
        display: flex;
        flex-direction: column;
        position: absolute;
        list-style: none;
        background-color: black;
        padding: 3px;
        border: 1px solid black;
    }

    li:hover {
        color: #39ff14;
        cursor: pointer;
    }
`;