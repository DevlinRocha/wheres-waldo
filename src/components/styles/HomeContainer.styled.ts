import styled from 'styled-components';

interface SwitchProps {
  waldoMode: boolean;
}

export const MainContainer = styled.main<SwitchProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  width: 100%;
  height: auto;
  text-align: center;

  figure {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: auto;
    text-align: center;
    overflow-x: none;
  }

  img {
    object-fit: contain;
  }

  #homeLogo {
    border: none;
    width: 100%;
    img {
      width: 100%;
      height: 35vh;
    }
  }

  a {
    border: 3px solid
      ${props =>
        props.waldoMode
          ? props.theme.colors.primary
          : props.theme.colors.secondary};
    border-radius: 8px;
    padding: 16px;
  }

  h3 {
    color: white;
    color: black;
    padding: 8px;
    border-radius: 7px;
  }
`;

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 16px;

  figure {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  figcaption {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const LevelContainer = styled(HomeContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  padding: 0 3vw;
  height: auto;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    object-position: right bottom;
    border-radius: 5px;
  }

  @media only screen and (max-device-width: 1000px) {
    figure > * {
      height: auto;
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
  @media only screen and (max-device-width: 669px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-device-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const CharacterContainer = styled(LevelContainer)`
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  img {
    width: 100%;
    max-width: 200px;
    height: 30vh;
    object-fit: contain;
  }
  @media only screen and (max-device-width: 669px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr 1fr;
    img {
      height: 25vh;
    }
  }
  @media only screen and (max-device-width: 360px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-device-width: 300px) {
    display: flex;
  }
`;

export const ItemContainer = styled(CharacterContainer)`
  @media only screen and (max-device-width: 1000px) {
    img {
      height: 100px;
      width: 100px;
    }
  }
`;

export const DifficultyGrid = styled.section`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const SwitchContainer = styled.div<SwitchProps>`
  position: absolute;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 7vw;
  @media only screen and (max-device-width: 669px) {
    position: relative;
    align-self: center;
    margin: 8px 0 0 0;
  }

  label {
    width: fit-content;
    overflow: hidden;
    white-space: nowrap;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    flex-shrink: 0;
  }

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props =>
      props.waldoMode
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: '';
    height: 26px;
    min-width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:focus + span {
    box-shadow: 0 0 1px ${props => props.theme.colors.secondary};
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
