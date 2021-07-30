import styled from 'styled-components'
import { setDisabled, toogleBackground } from './mixins'

type DisplayProps = {
    display: string | undefined 
}

type EmptyProps = {
    back: string 
    disabled: boolean 
}

export const Container = styled.div<DisplayProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
    display: ${props => props.display};
    align-items: center;
    justify-content: center;

`;

export const Modal = styled.div`
    width: 70%;
    height: 70%;
    border-radius: 0.625rem;
    padding: 1rem;
    background-color: #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: space-around;
    

    img {
        width: 50%;
        height: 100%;
        border-radius: 0.625rem;
    }
`;

export const Info = styled.div`
    position: relative;
    width: 35%;
    height: 100%;
    //border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    svg {
        position: absolute;
        top: .5rem;
        right: .5rem;
        font-size: 1.5rem;
        cursor: pointer;
        
        :hover {
            color: #ec118b;
        }
    }
`;

export const Title = styled.h1`  
    font-size: 1.125rem;
    font-family: Lato_100;
    letter-spacing: .2rem;
`;

export const BoxColor = styled.div`
    width: 100%;
    height: 6.25rem;
    //border: 1px solid black;
    display: flex;
    
    justify-content: space-between;

    p {
        font-family: Lato_300;
        font-size: 0.75rem;
    }

    strong {
        color: red;
        font-size: 1rem;
    }

    img {
        width: 3.75rem;
        height: 4.375rem;
        border: 1px solid black;
    }
`;

export const ColorImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const PricingBox = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
        font-size: 0.875rem;
        color: #191919;
        font-size: 1rem;
    }
`;

export const SizeContainer = styled.div`
    width: 100%;
    height: 3.75rem;
    //border: 1px solid black;
    
    p{
        font-family: Lato_400;
    }

`;

export const SizeList = styled.div`
    width: 100%;
    display: flex;
`;

export const SizeItem = styled.div<EmptyProps>`
    width: 2rem;
    height: 2rem;
    margin: .25rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    input {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            visibility: hidden;
            
        }

        input[type="radio"]:checked ~ label{
            ${toogleBackground()}
        }

        label {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: white;
            border: 1px solid black;
            background-image: ${props => `url(${props.back})`};

            :hover {   
                background-color: #ec118b;
            }

            :hover p {
                color: white;
            }
        }

    ${props => props.disabled ? setDisabled() : ''}
   
`;

export const AmountBox = styled.div`
    width: 100%;
    height: 3.125rem;
    //border: 1px solid black;
    display: flex;

    button {
        font-size: 1.5rem;
        background-color: transparent;
        border: none;
        width: 1rem;
        height: 3.125rem;   
    }

    div {
        width: 3.125rem;
        height: 3.125rem;
        margin: 0 .5rem;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            font-family: Lexend_500;
        }
    }

`;

export const ButtonBox = styled.div`
    width: 100%;
    height: 3.125rem;
    //border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
        width: 50%;
        height: 2rem;
        
    }
`;



