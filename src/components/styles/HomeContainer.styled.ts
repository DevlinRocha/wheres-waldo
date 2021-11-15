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
  background-color: white;
  gap: 32px;
  width: 100%;
  height: auto;
  text-align: center;

  figure {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
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
    width: 75vw;
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
  gap: 32px;

  figure {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  figcaption {
    color: ${props => props.theme.colors.secondary};
    padding: 8px;
  }
`;

export const LevelContainer = styled(HomeContainer)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-content: space-around;
  background-color: white;
  gap: 5vw;
  padding: 0 5vw;
  height: 100%;

  a {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-device-width: 1000px) {
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    figure {
      height: 100%;
    }
  }
`;

export const CharacterContainer = styled(LevelContainer)`
  img {
    height: 300px;
    width: 150px;
  }
  @media only screen and (max-device-width: 1000px) {
    img {
      width: 75%;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ItemContainer = styled(CharacterContainer)`
  img {
    width: 150px;
    height: 150px;
  }
  @media only screen and (max-device-width: 1000px) {
    img {
      width: 50%;
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
  margin: 0 10vw;
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
