import styled from 'styled-components'
import { setDisabled, toogleBackground, hiddenVisibilityPopUp, visibleVisibilityPopUp } from './mixins'

type DisplayProps = {
    display: string | undefined 
}

type EmptyProps = {
    back: string 
    disabled: boolean 
}

type PopUpDisplay = {
    toogleVisibility: boolean
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
    padding: 2rem;

`;

export const Modal = styled.div`
    width: 70%;
    height: 80%;
    border-radius: 0.625rem;
    padding: 1rem;
    background-color: ${props => props.theme.colors.modal_bg_Whisper};
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 100%;
        height: 100%;
    }
    
`;

export const ImageLeft = styled.img`
    width: 50%;
    height: 100%;

    @media only screen and (min-width: 320px) and (max-width: 700px){
        display: none;
    }

`;

export const Info = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
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
            color: ${props => props.theme.colors.modal_icon_hover};
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 100%;
        align-items: center;
    }
`;

export const Title = styled.h1`  
    font-size: 1.125rem;
    font-family: Lato_100, sans-serif;
    letter-spacing: .2rem;
`;

export const BoxColor = styled.div`
    width: 100%;
    height: 6.25rem;
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
        border: 1px solid ${props => props.theme.colors.modal_border_Gray};
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 100%;
        height: 50%;
        flex-direction: column;

        img {
            width: 50%;
            height: 90%;
        }
    }
`;

export const ColorImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 100%;
        height: 90%;
        align-items: center;
    }
`;

export const PricingBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    strong {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.modal_strong};
        font-size: 1rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 100%;
        height: 10%;
        align-items: center;
        flex-direction: row;
        
        strong {
            margin-right: .5rem;
        }
    }
`;

export const SizeContainer = styled.div`
    width: 100%;
    height: 3.75rem;
    
    p {
        font-family: Lato_400, sans-serif;
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 50%;
        
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
            border: 1px solid ${props => props.theme.colors.modal_border_Gray};
            background-image: ${props => `url(${props.back})`};

            p {
                font-size: 0.75rem;
            }

            :hover {   
                background-color: ${props => props.theme.colors.modal_label_hover_pink};
            }

            :hover p {
                color: ${props => props.theme.colors.modal_text_white};
            }
        }

    ${props => props.disabled ? setDisabled() : ''}
   
`;

export const AmountBox = styled.div`
    width: 100%;
    height: 3.125rem;
    display: flex;
    
    button {
        font-size: 1.5rem;
        background-color: transparent;
        border: none;
        width: 1rem;
        height: 3.125rem;   

        :disabled {
            cursor: not-allowed;
        }
    }

    div {
        width: 3.125rem;
        height: 3.125rem;
        margin: 0 .5rem;
        border: 1px solid ${props => props.theme.colors.modal_border_Gray};
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            font-family: Lexend_500, sans-serif;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 50%;
        
    }

`;

export const ButtonBox = styled.div`
    width: 100%;
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
        width: 100%;
        height: 2.5rem;
        border: none;
        color: ${props => props.theme.colors.modal_text_white};
        background-color: ${props => props.theme.colors.modal_bd_Green};
        font-size: 1rem;
        transition: all .5s ease-in-out;

        :hover {
            filter: brightness(80%);
        }
        
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 50%;
        
    }
`;


export const PopUpComfirmPurchase = styled.div<PopUpDisplay>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem ;

    ${props => !props.toogleVisibility ? hiddenVisibilityPopUp() : visibleVisibilityPopUp()}

`;

export const PopUpBox = styled.div`
    position: relative;
    width: 43.75rem;
    height: 17.5rem;
    background-color: ${props => props.theme.colors.popUp_bg};
    transform: translateY(-100px);
    padding: 1rem;
    display: flex;


    img {
        width: 12.5rem;
        height: 100%;
    }

    div {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 2rem;
        justify-content: space-around;
        

        h1 {
            color: #da2423;
        }

        h2 {
            font-family: Inter_600;
            font-size: 1.125rem;
        }

        button {
            width: 18.75rem;
            height: 2.5rem;
            background-color: ${props => props.theme.colors.modal_bd_Green};
            color: ${props => props.theme.colors.modal_text_white};
            transition: all .5 ease-in-out;

            :hover {
                filter: brightness(80%);
            }
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 70%;
        height: 40%;
        transform: translateY(0);

        img{
            display: none;
        }

        div {
            width: 100%;
            align-items: center;
            padding: 1rem;


            button {
            width: 100%;
        }
        }

        


    }
`;
