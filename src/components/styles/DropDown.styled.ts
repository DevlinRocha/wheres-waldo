import styled from 'styled-components';

interface DropDownProps {
    isDropDownOpen: boolean;
};

export const DropDown = styled.aside<DropDownProps>`
    justify-self: end;
    transition: all 3s;

    #levelList {
        display: ${props=>props.isDropDownOpen ? 'flex' : 'none'}; // 'flex' or 'none'
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        background: white;
        width: auto;
        height: ${props=>props.isDropDownOpen ? 'auto' : '0px'};
        margin: 3px 16px 0 0;
        padding: ${props=>props.theme.sizing.ul.padding};
        border: 1px solid ${props=>props.theme.colors.secondary};
        border-radius: ${props=>props.theme.sizing.ul.borderRadius};
        transition: all 0.75s;
        z-index: 1;
        list-style-type: none;
    }

    a {
        padding: 8px;
        margin: 0;
        opacity: ${props=>props.isDropDownOpen ? 1 : 0};
        display: ${props=>props.isDropDownOpen ? 'inline-block' : 'none'}; // 'inline-block' or 'none'
        transition: opacity, background-color, color, 0.25s;
        width: 100%;
        height: 100%;
        color: ${props=>props.theme.colors.primary};
    }

    a:hover {

        background-color: ${props=>props.theme.colors.primary};
        border-radius: ${props=>props.theme.sizing.ul.borderRadius};
        color: white;
    }

    .active {
        color: ${props=>props.theme.colors.secondary};
    }
`