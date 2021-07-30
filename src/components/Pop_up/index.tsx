import React, { useEffect, useState } from 'react'
import * as S from './style'
import { IoArrowBack } from 'react-icons/io5'
import { Product } from '../../types/api'
import allActions from '../../actions'
import emptySize from '../../assets/close.svg'
import { useSelector, useDispatch } from 'react-redux'
import { allInitialState } from '../../constants/reducer'

type ProductItem = {
    product: Product
    display: string
}

type Props = {
    cardReducer: ProductItem
}

export default function PopUp() {
    
    const data = useSelector((state:Props) => state.cardReducer)
  
    const [item, setItem] = useState<ProductItem | undefined>(undefined)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        setItem(data)
         
    },[data, item])


    const sizeSelect = (size:string)=>{
       console.log(size)
    }

    const addAmount = () => {
        setAmount(amount => amount + 1)
    }

    const removeAmount = () => {
        setAmount(amount => amount - 1)
    }


    const dispatch = useDispatch()

    function fechar(){
        dispatch(allActions.carAction.selectProduct(
                allInitialState.INITIAL_CARD_STATE.product, 
                allInitialState.INITIAL_CARD_STATE.display
            )
        )
    }

    return(
        <S.Container display = {item?.display}>
            <S.Modal>
                <img src={item?.product?.image} alt='exemplo'/>

                <S.Info>
                    <S.Title>{item?.product.name}</S.Title>
                    
                    <S.BoxColor >
                        <S.ColorImage>
                            <p><strong>Cor |</strong> {item?.product.color}</p>
                            <img src={item?.product?.image} alt='exemplo'/>
                        </S.ColorImage>
                            

                            <S.PricingBox>
                                <p>
                                    <strong>
                                    {item?.product.actual_price}
                                    </strong>
                                </p>
                                <p>
                                    {item?.product.installments}
                                </p>
                            </S.PricingBox>
                        </S.BoxColor>

                    <S.SizeContainer>
                        <p>Tamanhos</p>
                        
                        <S.SizeList>
                            {item?.product.sizes.map((item, index)=>{
                                return !item.available ? 
                                    (<S.SizeItem key={index} back={emptySize} disabled={true}>
                                        <label htmlFor={`btn${index}`}><p>{item.size}</p></label>
                                    </S.SizeItem>)
                                :
                                    (<S.SizeItem onClick={() => sizeSelect(item.size)} key={index} back='' disabled={false}>
                                        <input name='btn' id={`btn${index}`} type='radio'/>
                                        <label htmlFor={`btn${index}`}><p>{item.size}</p></label>
                                    </S.SizeItem>)
                            })}
                        </S.SizeList>
                        </S.SizeContainer>

                    <S.AmountBox>
                        <button onClick={removeAmount} disabled={amount <= 0}>-</button>
                        <div>
                            <span>{amount}</span>
                        </div>
                        <button onClick={addAmount}>+</button>
                        
                    </S.AmountBox>

                    <S.ButtonBox>
                        <button>Comprar</button>
                    </S.ButtonBox>

                    <IoArrowBack onClick={fechar}>sair</IoArrowBack>
                </S.Info>
                
            </S.Modal>

            
        </S.Container>
    )
}


/*
(<S.SizeItem key={index} back={emptySize} disabled={true}>
        
        <p>{item.size}</p>
    </S.SizeItem>)
:
    (<S.SizeItem  key={index} onClick={()=> teste(index)} back='' disabled={false}>
        <input id='sizeBtn' type= 'radio' name='btn'/>
        <p>{item.size}</p>
    </S.SizeItem>)
*/