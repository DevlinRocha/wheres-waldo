import styled from "styled-components";
import { Coords } from '../WaldoGame';
import { ThemeType } from './Theme';

interface GameProps {
    theme?: ThemeType;
    menuCoords: Coords;
};

export const GameContainer = styled.section<GameProps>`
    user-select: none;

    img {
        --webkit-user-drag: none;
        width: 100%;
        height: auto;
        object-fit: none;
    }

    ul {
        left: ${props=>props.menuCoords.x+1}px;
        top: ${props=>props.menuCoords.y}px;
        color: ${props=>props.theme.colors.contextMenu.text};
        display: flex;
        flex-direction: column;
        position: absolute;
        list-style: none;
        background-color: ${props=>props.theme.colors.contextMenu.background};
        padding: 3px;
    }

    li:hover {
        color: ${props=>props.theme.colors.contextMenu.hover};
        cursor: pointer;
    }
`;