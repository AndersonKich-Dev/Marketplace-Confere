import { useState }  from "react";
import * as S from './styles'
import notFound from '../../assets/default.png'
import { Product } from '../../types/api'
import { useDispatch } from 'react-redux'
import allActions from '../../actions'


type Props = {
    product: Product,
}


const Card = ({product}: Props) => {
    const [onSale, setOnSale] = useState(product.on_sale)

    const dispatch = useDispatch()

    function addProduct(){
        dispatch(allActions.carAction.selectProduct(product, 'flex'))
    }

    return(
        <S.Container>
            <img src={!product.image ? notFound : product.image} alt='Imagem mostrando o produto.'/>

            <S.PromotionBox onsale={onSale}>
                {!product.discount_percentage ? (<span>{'LIQ'}</span>)
                : (<span>{`${product.discount_percentage} OFF`}</span>)}
            </S.PromotionBox>


            <S.Information>
                <h1>{product.name}</h1>
                
                <S.PricingBox onsale={onSale}>
                    {!onSale ? 
                    <p><strong>{product.actual_price}</strong></p>
                    :
                    <p> De <span>{product.regular_price}</span> por <strong>{product.actual_price}</strong></p>
                    }
                </S.PricingBox>

                <S.Stallments>{product.installments}</S.Stallments>
            </S.Information>

            <S.BtnDetails>
                <button onClick={addProduct}>Detalhes</button>
            </S.BtnDetails>
        </S.Container>
    )
}


export default (Card)

