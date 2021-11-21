import styled from 'styled-components';
import { Coords } from '../WaldoGame';

interface MenuProps {
  menuCoords: Coords;
  mouseCoords: Coords;
}

export const ContextMenu = styled.div<MenuProps>`
  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${props => props.menuCoords.y - 150 / 4}px;
    left: ${props =>
      props.mouseCoords.x > 750
        ? props.menuCoords.x - 240 / 2 + 3
        : props.menuCoords.x + 100 / 2 + 3}px;

    color: ${props => props.theme.colors.primary};
    background-color: white;
    padding: ${props => props.theme.sizing.ul.padding};
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.sizing.ul.borderRadius};
    gap: 3px;
    list-style: none;
    z-index: 1;

    @media only screen and (max-width: 1200px) {
      left: ${props =>
        props.mouseCoords.x > 750
          ? props.menuCoords.x - 215 / 2 + 3
          : props.menuCoords.x + 75 / 2 + 3}px;
      top: ${props => props.menuCoords.y - 125 / 4}px;
    }

    @media only screen and (max-width: 1000px) {
      left: ${props =>
        props.mouseCoords.x > 750
          ? props.menuCoords.x - 200 / 2 + 3
          : props.menuCoords.x + 60 / 2 + 3}px;
      top: ${props => props.menuCoords.y - 100 / 4}px;
    }

    @media only screen and (max-width: 800px) {
      left: ${props =>
        props.mouseCoords.x > 750
          ? props.menuCoords.x - 185 / 2 + 3
          : props.menuCoords.x + 45 / 2 + 3}px;
      top: ${props => props.menuCoords.y - 75 / 4}px;
    }

    @media only screen and (max-width: 600px) {
      left: ${props =>
        props.mouseCoords.x > 750
          ? props.menuCoords.x - 175 / 2 + 3
          : props.menuCoords.x + 35 / 2 + 3}px;
      top: ${props => props.menuCoords.y - 60 / 4}px;
    }

    @media only screen and (max-width: 500px) {
      left: ${props =>
        props.mouseCoords.x > 750
          ? props.menuCoords.x - 167 / 2 + 3
          : props.menuCoords.x + 27 / 2 + 3}px;
      top: ${props => props.menuCoords.y - 50 / 4}px;
    }

    @media only screen and (max-width: 420px) {
      left: ${props =>
        props.mouseCoords.x > 650
          ? props.menuCoords.x - 162 / 2 + 3
          : props.menuCoords.x + 22 / 2 + 3}px;
      top: ${props => props.menuCoords.y - 45 / 4}px;
    }

    @media only screen and (max-width: 300px) {
      left: ${props =>
        props.mouseCoords.x > 600
          ? props.menuCoords.x - 152 / 2 + 3
          : props.menuCoords.x + 12 / 2 + 3}px;
      top: ${props => props.menuCoords.y - 30 / 4}px;
    }
  }

  li {
    padding: 3px;
  }

  li:hover {
    color: white;
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};
    transition: opacity, background-color, color, 0.25s;
    border-radius: 3px;
  }
`;

export const TargetingBox = styled.div<MenuProps>`
  left: ${props => props.menuCoords.x - 100 / 2}px;
  top: ${props => props.menuCoords.y - 100 / 2}px;
  display: flex;
  position: absolute;
  height: 100px;
  width: 100px;
  border: 5px dashed ${props => props.theme.colors.targetingBox};
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  z-index: 1;

  @media only screen and (max-width: 1200px) {
    border: 4px dashed ${props => props.theme.colors.targetingBox};
    left: ${props => props.menuCoords.x - 75 / 2}px;
    top: ${props => props.menuCoords.y - 75 / 2}px;
    height: 75px;
    width: 75px;
  }

  @media only screen and (max-width: 1000px) {
    left: ${props => props.menuCoords.x - 60 / 2}px;
    top: ${props => props.menuCoords.y - 60 / 2}px;
    height: 60px;
    width: 60px;
  }

  @media only screen and (max-width: 800px) {
    border: 3px dashed ${props => props.theme.colors.targetingBox};
    left: ${props => props.menuCoords.x - 45 / 2}px;
    top: ${props => props.menuCoords.y - 45 / 2}px;
    height: 45px;
    width: 45px;
  }

  @media only screen and (max-width: 600px) {
    left: ${props => props.menuCoords.x - 35 / 2}px;
    top: ${props => props.menuCoords.y - 35 / 2}px;
    height: 35px;
    width: 35px;
  }

  @media only screen and (max-width: 500px) {
    border: 2px dashed ${props => props.theme.colors.targetingBox};
    left: ${props => props.menuCoords.x - 30 / 2}px;
    top: ${props => props.menuCoords.y - 30 / 2}px;
    height: 30px;
    width: 30px;
  }

  @media only screen and (max-width: 420px) {
    left: ${props => props.menuCoords.x - 25 / 2}px;
    top: ${props => props.menuCoords.y - 25 / 2}px;
    height: 25px;
    width: 25px;
  }

  @media only screen and (max-width: 300px) {
    border: 1px dashed ${props => props.theme.colors.targetingBox};
    left: ${props => props.menuCoords.x - 15 / 2}px;
    top: ${props => props.menuCoords.y - 15 / 2}px;
    height: 15px;
    width: 15px;
  }
`;
