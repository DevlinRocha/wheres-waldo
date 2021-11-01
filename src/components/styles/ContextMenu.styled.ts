import styled from "styled-components";
import { Coords } from '../WaldoGame';

interface MenuProps {
    menuCoords: Coords;
};

const targetSize = 75;

export const ContextMenu = styled.div<MenuProps>`
    ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: ${props=>props.menuCoords.x+(targetSize/2)+3}px;
        top: ${props=>props.menuCoords.y-(targetSize/4)}px;
        color: ${props=>props.theme.colors.primary};
        background-color: white;
        padding: ${props=>props.theme.sizing.ul.padding};
        border-radius: ${props=>props.theme.sizing.ul.borderRadius};
        gap: 3px;
        list-style: none;
        z-index: 1;
    }

    li {
        padding: 3px;
    }

    li:hover {
        color: white;
        cursor: pointer;
        background-color: ${props=>props.theme.colors.primary};
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
    border: 5px dashed ${props=>props.theme.colors.targetingBox};
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    z-index: 1;
`