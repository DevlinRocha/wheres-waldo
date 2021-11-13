import styled from 'styled-components';

interface GameContainerProps {
  isTimerOn: boolean;
}

interface PauseScreenProps {
  isNotificationOpen: boolean;
}

export const GameContainer = styled.main<GameContainerProps>`
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
    border: 7px solid ${props => props.theme.colors.secondary};
    border-radius: 7px;
    ${props => (props.isTimerOn ? null : 'filter: blur(16px)')};
    ${props => (props.isTimerOn ? null : '-webkit-filter: blur(16px)')};
  }
`;

export const PauseScreen = styled.p<PauseScreenProps>`
  position: fixed;
  color: white;
  left: 50%;
  top: ${props => (props.isNotificationOpen ? '15rem' : '10rem')};
  transition: top 1s ease 0s;
  transform: translateX(-50%);
  padding: 8px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.sizing.ul.borderRadius};
  cursor: pointer;
  z-index: 1;
`;
