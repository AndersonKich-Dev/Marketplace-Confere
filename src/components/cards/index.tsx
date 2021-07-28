import React, { useState, useEffect}  from "react";
import * as S from './styles'
import notFound from '../../assets/default.png'
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import { Product } from '../../types/api'

type Props = {
    product: Product
}


export default function Card({product}: Props) {

    const [selectItem, setSelectItem] = useState(false)
    const [onSale, setOnSale] = useState(product.on_sale)

    useEffect(()=>{
        
    },[])

    const addToCart = () =>{
        setSelectItem(!selectItem)
    }

    return(
        <S.Container onClick={addToCart}>
            {!selectItem ? <RiShoppingCart2Line color='#525252'/> : <RiShoppingCartFill color='#D75413'/>}
            <img src={!product.image ? notFound : product.image} alt='Teste'/>

            <S.PromotionBox onsale={onSale}>
                <span>{`${product.discount_percentage} OFF`}</span>
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
        </S.Container>
    )
}