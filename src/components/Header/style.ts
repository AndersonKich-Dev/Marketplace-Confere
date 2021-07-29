import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background: ${props => props.theme.colors.header_bg};
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        text-transform: uppercase;
        letter-spacing: .5rem;
        color: ${props => props.theme.colors.header_text_White};
    }
`;