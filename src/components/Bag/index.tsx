import React, { useEffect, useState } from 'react'
import * as S from './style'
import { GiShoppingBag } from 'react-icons/gi'
import  { CgCloseR } from 'react-icons/cg'
import { useSelector, useDispatch } from 'react-redux'
import { PurchasedProduct } from '../../types/api'
import allActions from '../../actions'

export default function Bag() {
    const [subTotal, setSubTotal] = useState('')
    const [countProduct, setCountProduct] = useState(0)

    const dispatch = useDispatch()

    function remove(date:Date){
        dispatch(allActions.handbagAction.removeProductItem(date))
    }

    const data:PurchasedProduct[] = useSelector((state:any) => state.addingProductItemReducer.data)

    useEffect(()=>{
        let totaValue= 0
        let countItem = 0
        data.map((item:PurchasedProduct, index:number)=>{
             totaValue = totaValue + item.totalPrice 
             countItem = countItem + item.count
          })
          setSubTotal(totaValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
         setCountProduct(countItem)
      },[data])



    return (
        <S.Container>
            <S.BagIcon>
                <GiShoppingBag/>
            </S.BagIcon>
        
            <S.CountBag>
                <p>{countProduct}</p>
            </S.CountBag>

            <S.InformationBox>
                <p>Minhas compras</p>
                <span>{subTotal} (subtotal)</span>
            </S.InformationBox>
            
            <S.ContainerBagList>
                {(data.length ? 
                    <S.SubContainerBagList >
                        <S.BagListBackground>
                            <S.BagListTitle>
                                <h1>Ultimos produtos adicionados:</h1>
                            </S.BagListTitle>

                            <S.BagListItens>
                                {data.map((item:PurchasedProduct, index:number)=>(
                                    <S.Item key={index}>
                                        <S.ImageItem>
                                            <img src={item.image} alt='Pequena imagem da roupa selecionada para compra.'/>
                                        </S.ImageItem>
                                        <S.ItemName>
                                            <h3>{item.name}</h3>
                                            <p>Quantidade: <strong>{item.count}</strong> ---- Tamanho: <strong>{item.size}</strong></p>
                                            
                                        </S.ItemName>

                                        <S.ItemPrice>
                                            <CgCloseR onClick={()=>remove(item.createAt)}/>
                                            <p>{item.actual_price}</p>
                                        </S.ItemPrice>                                   
                                    </S.Item>
                                ))}
                            </S.BagListItens>

                            <S.BagInfoBox>
                                <div>
                                    <p>{countProduct} items na sacola</p>
                                    <h3>SUBTOTAL</h3>
                                </div>

                                <div>
                                <h3>{subTotal}</h3>
                                </div>
                                <button>Comprar</button>
                            </S.BagInfoBox>
                        </S.BagListBackground>
                    </S.SubContainerBagList>
                    
                    : 
                    
                    <S.SubContainerBagList>
                        <S.BagListBackground>
                            <S.BagListEmpty>
                                <h1>Sua sacola esta vazia!</h1>
                            </S.BagListEmpty>
                        </S.BagListBackground>
                    </S.SubContainerBagList>
                    )}
                
            </S.ContainerBagList>
        </S.Container>
    )
}

/*
{(data.length ? <div>Pai</div> : <div>Filho</div>)}
*/