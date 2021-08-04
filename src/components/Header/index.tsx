import * as S from './style'
import { Link } from 'react-router-dom'

import MyBag from '../Bag'



export default function Header(){


    return(
        <S.Container>
            <Link to='/'>
                <S.Title>Store</S.Title>
            </Link>

            <MyBag/>
            
        </S.Container>
    )
}