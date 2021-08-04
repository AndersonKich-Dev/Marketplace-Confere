import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${props => props.theme.colors.footer_bg};


    span {
        margin-right: 3rem;
        font-family: Lexend_500, sans-serif;  
        color: ${props => props.theme.colors.footer_text_white};

        strong {
            color: ${props => props.theme.colors.footer_text_Red};
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        justify-content: center;

        span {
            margin: 0;
        }
    }
`;