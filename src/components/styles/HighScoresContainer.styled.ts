import styled from 'styled-components';

interface SwitchProps {
  waldoMode: boolean;
}

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 32px;
  background-color: white;
  width: 100%;
  height: auto;
  text-align: center;

  figure {
    width: auto;
    height: 100%;
    padding: 8px;
  }

  figcaption {
    padding: 16px 0 0 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  table,
  th,
  td {
    border: 2px solid black;
    border-collapse: collapse;
  }

  table {
    width: 100%;

    caption,
    th,
    td {
      padding: 16px;
    }

    .username {
      width: 80%;
    }

    .time {
      width: 20%;
    }
  }
`;

export const HighScoresContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 32px;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  figcaption {
    color: ${props => props.theme.colors.secondary};
    width: clamp(auto, 50%, auto);
  }
`;

export const HighScoresContainerRow = styled(HighScoresContainer)<SwitchProps>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-content: space-around;
  background-color: white;
  gap: 8px;

  figure {
    width: auto;
    height: auto;
    max-height: 35vh;
    border: 3px solid
      ${props =>
        props.waldoMode
          ? props.theme.colors.primary
          : props.theme.colors.secondary};
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
  }

  img {
    height: 150px;
    object-fit: contain;
  }
`;

export const DifficultyGrid = styled.section`
  display: flex;
  position: relative;
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
  margin: 0 32px;
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
