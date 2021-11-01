import styled from "styled-components";
import { Coords } from '../WaldoGame';
import { ThemeType } from './Theme';

interface MenuProps {
    theme?: ThemeType;
    menuCoords: Coords;
};

const targetSize = 75;

export const ContextMenu = styled.div<MenuProps>`
    ul {
        left: ${props=>props.menuCoords.x+(targetSize/2)+3}px;
        top: ${props=>props.menuCoords.y-(targetSize/4)}px;
        color: ${props=>props.theme.contextMenu.selectionMenu.text};
        display: flex;
        flex-direction: column;
        position: absolute;
        list-style: none;
        background-color: ${props=>props.theme.contextMenu.selectionMenu.background};
        padding: 3px;
        border-radius: 7px;
        gap: 3px;
        z-index: 1;
    }

    li:hover {
        color: ${props=>props.theme.contextMenu.selectionMenu.hover.text};
        cursor: pointer;
        background-color: ${props=>props.theme.contextMenu.selectionMenu.hover.background};
        border-radius: 3px;
    }
`

export const TargetingBox = styled.div<MenuProps>`
    left: ${props=>props.menuCoords.x-(targetSize/2)}px;
    top: ${props=>props.menuCoords.y-(targetSize/2)}px;
    display: flex;
    position: absolute;
    height: ${targetSize}px;
    width: ${targetSize}px;
    border: 5px dashed ${props=>props.theme.contextMenu.targetingBox.borderColor};
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    z-index: 1;
`