import styled from 'styled-components'
import { setColor, setDisplay } from './mixins'


type OnSale = {
    onsale: boolean
}


export const Container = styled.div`
    position: relative;
    width: 22%;
    height: 85%;
    background-color: ${props => props.theme.colors.card_white};
    border-radius: 0.312rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    box-shadow: 0px 0px 5px 0px #000000;
    cursor: pointer;
    flex-shrink: 0;

    svg {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        z-index: 1;
        font-size: 1.6rem;
    }

    img {
        width: 100%;
        height: 80%;
        border-radius: 0.312rem;
       
    }

    transition: all .5s ease-in-out;

:hover {
    transform: scale(1.1);
}

    @media only screen and (min-width: 700px) and (max-width: 1080px){
        
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 290px;
        height: 380px;
        
        :hover {
            transform: scale(1);
            filter: brightness(80%);
        }
    }
    
`;

export const Information = styled.div`
    width: 100%;
    height: 25%;
    background-color: ${props => props.theme.colors.card_Rosybrown};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    h1 {
        font-size: 0.75rem;
    }
`;

 export const PromotionBox = styled.div<OnSale>`
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    right: 0;
    border: 30px solid;
    border-color: ${props => props.theme.colors.card_Orange} ${props => props.theme.colors.card_Orange} transparent transparent;
    ${props => props.onsale ? setDisplay('block') : setDisplay('none')}

    span {
        position: absolute;
        top: -23px;
        left: 0;
        color: white;
        font-size: 14px;
        transform: rotate(45deg);
    }
 `;

 export const PricingBox = styled.div<OnSale>`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    

    span {
        text-decoration: line-through;
        color: ${props => props.theme.colors.card_Gray};
    }

    p {
        font-size: .875rem;
        font-family: Lexend_600;
    }


    ${props => props.onsale ? setColor(props.theme.colors.card_Orange, props.theme.colors.card_white, 1) : setColor(props.theme.colors.card_Black, props.theme.colors.card_white_100, .5)}
 `;

 export const  Stallments = styled.p`
 
    font-size: 0.625rem;
 
 `;