import styled from "styled-components";

export const Nav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    h1 > a {
        color: black;
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