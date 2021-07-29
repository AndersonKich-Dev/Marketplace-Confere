import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid black;
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
`;