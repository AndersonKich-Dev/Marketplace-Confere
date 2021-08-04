import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 12.5rem;
    height: 3.75rem;
    border-radius: 0.313rem;
    display: flex;
    padding: .5rem;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${props => props.theme.colors.bag_bg};
    transition: all .5s ease-in-out;


    :hover {
        background-color: ${props => props.theme.colors.bag_hover};
    }

    :hover div{
        visibility: visible;
        opacity: 1;
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 3.125rem;
        height: 3.125rem;
    }
`;

export const BagIcon = styled.div`
    width: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.bag_icon_Gray};
    }
`;

export const CountBag = styled.div`
    position: absolute;
    top: 2.188rem;
    left: 1.563rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.bag_count_bg_Green};
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 0.625rem;
        font-family: Lato_300, sans-serif;
    }
`;

export const InformationBox = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.bag_title_Gray};
    }

    span {
        font-size: 0.75rem;
        color: ${props => props.theme.colors.header_Black};
        font-family: Lato_300, sans-serif;
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        display: none;
    }
`; 

export const ContainerBagList = styled.div`
    position: absolute;
    top: 3.75rem;
    right: 1.875rem;
    z-index: 5;
    width: 26.25rem;
    padding: 1rem;
    background-color: transparent;
    visibility: hidden;
    opacity: 0;
    transition: all .5s ease-in-out;
    display: flex;
    align-items: flex-start;
    
    :hover {
        visibility: visible;
        opacity: 1;
    }


    @media only screen and (min-width: 320px) and (max-width: 700px){
        position: fixed;
        top: 6.25rem;
        right: 0;
        width: 70%;
        max-height: calc(100% - 10rem);
        background-color: ${props => props.theme.colors.bag_list_bg_pink};
    }
`;

export const SubContainerBagList = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.bag_list_bg_pink};
    border-radius: 0.625rem;

    ::before {
        position: absolute;
        top: -1.188rem;
        right: 6.875rem;
        content: '';
        line-height:0;
        width:0;
        height:0;
        border-style: solid;
        border-color: transparent transparent #f32858 transparent;
        border-width: 0.313rem 0.625rem 1.063rem;
        
    }
`;

export const BagListBackground = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.bag_list_bg};
    border-radius: 0.625rem;
    padding: 1rem;

    ::before {
        position: absolute;
        top: -1.4rem;
        right: 6.875rem;
        content: '';
        line-height:0;
        width:0;
        height:0;
        border-style: solid;
        border-color: transparent transparent rgba(255,255,255,0.6) transparent;
        border-width: 0.313rem 0.625rem 1.063rem;
        
    }


    @media only screen and (min-width: 320px) and (max-width: 700px){
        ::after, ::before {
            display: none;
        }

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const BagListTitle = styled.div`
    width: 100%;
    height: 2.188rem;
   
    h1{
        color: ${props => props.theme.colors.header_Black};
        font-size: 1rem;
        letter-spacing: .1rem;
        font-family: Lato_300, sans-serif;  
    }
`;

export const BagListItens = styled.ul`
    width: 100%;
    max-height: 17.5rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    ::-webkit-scrollbar{
        width: 0;
        height: 0;
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        max-height: 80%;
    }
`;

export const Item = styled.li`
    width: 100%;
    height: 5.313rem;
    margin-bottom: .5rem;
    padding:.5rem;
    border-bottom: 2px solid #ff5c7f;
    flex-shrink: 0;
    display: flex;  
`;

export const ImageItem = styled.div`
    width: 3.75rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
`;

export const ItemName = styled.div`
    width: 217px;
    height: 100%;
    padding-left: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.bag_text_Gray};
    }

    p {
        font-size: 0.625rem;
        font-family: Lato_400;
    }
`;

export const ItemPrice = styled.div`
    position: relative;
    width: 3.75rem;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    p {
        font-size: 0.75rem;
        font-family: Lexend_400;
        margin-bottom: .5rem;
    }

    svg {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.bag_icon_pink};
        transition: color .5s ease;

        :hover {
            color: red;
        }
    }
`;

export const BagInfoBox = styled.div`
    width: 100%;
    height: 5.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${props => props.theme.colors.bag_info_bg_White};

    div {
        width: 50%;
        height: 70%;
        flex-wrap: wrap;
        padding: .5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
            font-size: 0.625;
            font-family: Lato_300, sans-serif;
        }

        h3 {
            font-size: 0.75rem;
            font-family: Lexend_400, sans-serif;
        }
    }

    div:nth-child(2){
        justify-content: flex-end;
    }

    button {
        width: 100%;
        height: 30%;
        background-color: ${props => props.theme.colors.bag_button_Green};
        color: ${props => props.theme.colors.bag_button_color_White};
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        height: 7.625rem;

        div {
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
        }

        div:nth-child(2){
            flex-direction: row;
        }
    }
`;

export const BagListEmpty = styled.div`
    width: 100%;
    height: 5.313rem;
    display: flex;
    align-items: center;
    justify-content: center;   
    border: 2px solid #474747;
    border-style: dashed;

    h1 {
        font-size: 1rem;
        letter-spacing: .2rem;
        color: ${props => props.theme.colors.bag_text_Gray_50};
    }
`;



