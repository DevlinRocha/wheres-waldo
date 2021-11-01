import styled from 'styled-components';

interface DropDownProps {
    isDropDownOpen: boolean;
};

export const DropDown = styled.aside<DropDownProps>`
    transition: all 3s;

    p {
        cursor: pointer;
        color: white;
        background-color: ${props=>props.theme.colors.primary};
        padding: 5px;
        border-radius: 7px;
    }

    ul {
        display: ${props=>props.isDropDownOpen ? 'flex' : 'none'}; // 'none' or 'flex'
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        position: absolute;
        background: white;
        width: auto;
        height: ${props=>props.isDropDownOpen ? '100px' : '0px'};
        margin-right: 16px;
        padding: ${props=>props.theme.sizing.ul.padding};
        border: 1px solid ${props=>props.theme.colors.secondary};
        border-radius: ${props=>props.theme.sizing.ul.borderRadius};
        gap: 3px;
        transition: all 0.75s;
        z-index: 1;
    }

    li {
        opacity: ${props=>props.isDropDownOpen ? 1 : 0};
        display: ${props=>props.isDropDownOpen ? 'inline-block' : 'none'}; // 'inline-block' or 'flex'
        transition: all 0.75s;
    }

    li > a {
        color: ${props=>props.theme.colors.primary};
    }

    li:hover {

        background-color: ${props=>props.theme.colors.primary};
        border-radius: 15px;

        a {
            color: white;
        }
    }

    .active {
        color: ${props=>props.theme.colors.secondary};
    }
`