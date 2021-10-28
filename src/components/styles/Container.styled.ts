import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: auto;
    text-align: center;
    gap: 64px;

    img {
        height: 35vh;
        width: auto;
        padding: 32px;
    }
`

export const ContainerRow = styled(Container)`
    flex-direction: row;
`