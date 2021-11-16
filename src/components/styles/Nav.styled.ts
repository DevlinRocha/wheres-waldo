import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr auto 1fr;
  align-items: center;
  padding: 16px;
  background-color: white;
  gap: 8px;
  z-index: 1;

  #first {
    color: ${props => props.theme.colors.primary};
  }

  #second {
    color: ${props => props.theme.colors.secondary};
  }

  time {
    padding: 8px;
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    border-radius: 7px;
    cursor: pointer;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
  }

  button {
    cursor: pointer;
    color: white;
    background-color: ${props => props.theme.colors.primary};
    padding: 5px;
    border-radius: 7px;
    border: inherit;
    font: inherit;

    a {
      color: white;
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: rows;
    gap: 10px;
    list-style: none;
  }
`;
