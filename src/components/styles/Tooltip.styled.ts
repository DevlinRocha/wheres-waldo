import styled from 'styled-components';

interface TooltipProps {
  isTooltipOpen: boolean;
  waldoMode: boolean;
}

export const Tooltip = styled.aside<TooltipProps>`
  justify-self: end;
  transition: all 3s;

  display: ${props =>
    props.isTooltipOpen ? 'flex' : 'none'}; // 'flex' or 'none'
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  background: white;
  bottom: 50px;
  width: auto;
  height: ${props => (props.isTooltipOpen ? 'auto' : '0px')};
  padding: ${props => props.theme.sizing.ul.padding};
  border: 2px solid
    ${props =>
      props.waldoMode
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  border-radius: ${props => props.theme.sizing.ul.borderRadius};
  transition: all 0.75s;
  z-index: 1;
  list-style-type: none;

  p {
    padding: 8px;
    margin: 0;
    opacity: ${props => (props.isTooltipOpen ? 1 : 0)};
    display: ${props =>
      props.isTooltipOpen
        ? 'inline-block'
        : 'none'}; // 'inline-block' or 'none'
    transition: opacity, background-color, color, 0.25s;
    width: 100%;
    height: 100%;
  }
`;
