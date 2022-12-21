import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fafa;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Content = styled.div`
    background-color: #fff;
    width: 30%;
    min-width: 230px;
    border-radius: 6px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`