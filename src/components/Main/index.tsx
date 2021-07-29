import React from 'react'
import * as S from './style'

type Props = {
    children:  JSX.Element | JSX.Element[]
}

export default function Main( {children}: Props ){

    return(
        <S.Container>
            {children}
        </S.Container>
    )
}