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

  #homeLogo {
    border: none;
    img {
      height: clamp(15vh, 35vh, 35vh);
      width: auto;
    }
  }

  a {
    border: 3px solid ${props => props.theme.colors.primary};
    border-radius: 8px;
    padding: 8px;
  }

  figure {
    padding: px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    background-color: white;
    gap: 32px;
    width: 100%;
    height: auto;
    text-align: center;
  }

  #homeLogo {
    border: none;
    img {
      height: clamp(15vh, 35vh, 35vh);
      width: auto;
    }
  }

  a {
    border: 3px solid
      ${props =>
        props.waldoMode
          ? props.theme.colors.primary
          : props.theme.colors.secondary};
    border-radius: 8px;
    padding: 8px;
  }

  figure {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: none;
  }

  img {
    object-fit: contain;
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

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }

  figcaption {
    color: ${props => props.theme.colors.secondary};
    padding: 8px;
    width: clamp(auto, 50%, auto);
  }
`;

export const HomeContainerRow = styled(HomeContainer)`
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  gap: 8px;
  padding: 32px 0 0;

  figure {
    width: 100%;
    height: 35vh;

    a {
      text-decoration: none;
      width: 100%;
      height: 100%;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DifficultyGrid = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const SwitchContainer = styled.div<SwitchProps>`
  position: relative;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;

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
