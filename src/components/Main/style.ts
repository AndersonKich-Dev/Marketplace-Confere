import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 10rem);
    background-color: ${props => props.theme.colors.main_bg};
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media only screen and (min-width: 320px) and (max-width: 700px){
        justify-content: center;
    }
`;

export const Subcontainer = styled.div`
    width: 100%;
    height: 90%;
    overflow-Y: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

export const SelectBar = styled.div`
    width: 95%;
    height: 10%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 5px 0px #000000;

    form {

        select {
            height: 1.563rem;
            border: none;
            border-bottom: 2px solid black;
            padding-left: 1rem;
            background-color: transparent;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
       form{
           select {
               font-size: .75rem;
           }
       }
       
       
    }

`;

export const ModalityBox = styled.div`
    width: 16.25rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
   

    button {
        width: 7.5rem;
        height: 1.875rem;
        border-radius: 0.313rem;
        background-color: ${props => props.theme.colors.main_button_bg};
        font-size: .75rem;
        color: #474747;
        transition: all .5s ease-in-out;

        :hover {
            color: ${props => props.theme.colors.main_text_White};
            background-color: ${props => props.theme.colors.main_button_hover};

        }
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 9rem;
       
        button {
            width: 4.2rem;
            font-size: .625rem;
        }
    }

`;