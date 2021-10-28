import styled from "styled-components";
import { Coords } from '../WaldoGame';
import { ThemeType } from './Theme';

interface GameProps {
    theme?: ThemeType;
    menuCoords: Coords;
};

export const GameContainer = styled.section<GameProps>`
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

    ul {
        left: ${props=>props.menuCoords.x+1}px;
        top: ${props=>props.menuCoords.y}px;
        color: ${props=>props.theme.contextMenu.text};
        display: flex;
        flex-direction: column;
        position: absolute;
        list-style: none;
        background-color: ${props=>props.theme.contextMenu.background};
        padding: 3px;
        border-radius: 7px;
        gap: 3px;
        z-index: 1;
    }

    li:hover {
        color: ${props=>props.theme.contextMenu.hover.text};
        cursor: pointer;
        background-color: ${props=>props.theme.contextMenu.hover.background};
        border-radius: 3px;
    }
`;