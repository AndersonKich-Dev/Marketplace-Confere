import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 160px);
    overflow-x: scroll;
    background-color: violet;
    display: flex;
    align-items: center;


    @media only screen and (min-width: 320px) and (max-width: 700px){
        justify-content: center;
        flex-wrap: wrap;
    }


`;