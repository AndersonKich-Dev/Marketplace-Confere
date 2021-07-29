import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.home_bg};
`;

export const HomeBox = styled.div`
    width: 80%;
    height: 70%;
    display: flex;

    @media only screen and (min-width: 700px) and (max-width: 1080px){
        width: 100%;
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-evenly;
    }
`;

export const ImageStore = styled.div`
    width: 60%;
    height: 100%;
    display: flex;

    img{
        width: 100%;
        height: 100%;
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
       width: 100%;
       height: 55%;
    }
`; 

export const InfoStore = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${props => props.theme.colors.home_text_Gray};

    h1 {
        text-transform: uppercase;
        font-family: Lexend_600;
        margin-bottom: 1rem;
        letter-spacing: .2rem;
    }

    h2 {
        margin-bottom: 2rem;
    }


    link, a {
        padding: .8rem 4rem;
        border-radius: 8px;
        background-color: ${props => props.theme.colors.home_bg};
        color: ${props => props.theme.colors.home_text_Gray_50};
        box-shadow: inset 4px 4px 5px rgba(255, 255, 255, 0.3),
        inset -4px -4px 5px rgba(0, 0, 0, 0.1),
        10px 40px 40px rgba(0, 0, 0, 0.1);
        transition: all .5s ease-in-out;

        :hover {
          filter: brightness(85%);
          color: ${props => props.theme.colors.home_text_Gray_100};
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
       width: 100%;
       height: 30%;
    }

`;



