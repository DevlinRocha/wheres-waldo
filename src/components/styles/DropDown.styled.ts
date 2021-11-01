import styled from 'styled-components';

interface DropDownProps {
    isDropDownOpen: boolean;
};

export const DropDown = styled.aside<DropDownProps>`
    transition: all 3s;

    p {
        cursor: pointer;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        position: absolute;
        background: white;
        width: auto;
        height: ${props=>props.isDropDownOpen ? '100px' : '0px'};
        transition: all 1s;
        border-radius: 15px;
    }

    li {
        opacity: ${props=>props.isDropDownOpen ? 1 : 0};
        display: ${props=>props.isDropDownOpen ? 'inline-block' : 'none'}; // 'none' or 'flex'
        transition: all 1s;
    }

    .active {
        color: ${props=>props.theme.contextMenu.selectionMenu.hover.text};
    }
`