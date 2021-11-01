import styled from "styled-components";

export const Nav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

    ul {
        display: flex;
        flex-direction: rows;
        gap: 10px;
        list-style: none;
    }
`;