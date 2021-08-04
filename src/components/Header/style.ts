import styled from 'styled-components'


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 6.25rem;
    background: ${props => props.theme.colors.header_bg};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    letter-spacing: .5rem;
    color: ${props => props.theme.colors.header_text_White};
`;







