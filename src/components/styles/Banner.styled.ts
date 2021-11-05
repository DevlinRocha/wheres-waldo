import styled from "styled-components";

export const Banner = styled.aside`
    position: fixed;
    color: white;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    background-color: ${props=>props.theme.colors.primary};
    border-radius: ${props=>props.theme.sizing.ul.borderRadius};
    z-index: 1;
`