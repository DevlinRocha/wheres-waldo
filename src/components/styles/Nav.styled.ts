import styled from "styled-components";

export const Nav = styled.nav`

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    align-items: center;
    padding: 16px;
    background-color: white;

    #first {
        color: ${props=>props.theme.colors.primary};
    }

    #second {
        color: ${props=>props.theme.colors.secondary};
    }

    a {
        text-decoration: none;
    }

    time {
        text-align: center;
    }

    ul {
        display: flex;
        flex-direction: rows;
        gap: 10px;
        list-style: none;
    }
`;