import React from 'react'
import * as S from './style'
import imageMarketplace from '../../assets/mark.png'
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <S.Container>
            <S.HomeBox>
               <S.ImageStore>
                    <img src={imageMarketplace} alt='imagem'/>
               </S.ImageStore>

               <S.InfoStore>
                   <h1>Marketplace</h1>
                   <h2>Seja Bem Vindo</h2>
                   <Link to='/store'>Enter</Link>
               </S.InfoStore>
            </S.HomeBox>       
        </S.Container>
    )
}