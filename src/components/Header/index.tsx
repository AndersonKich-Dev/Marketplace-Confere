import * as S from './style'
import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <S.Container>
            <Link to='/'>
                <h1>Store</h1>
            </Link>
        </S.Container>
    )
}