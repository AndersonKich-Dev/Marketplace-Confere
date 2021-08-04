import React, { useEffect, useState } from 'react'
import * as S from './style'
import { IoArrowBack } from 'react-icons/io5'
import  { CgCloseR } from 'react-icons/cg'
import { Product, PurchasedProduct } from '../../types/api'
import allActions from '../../actions'
import emptySize from '../../assets/close.svg'
import { useSelector, useDispatch } from 'react-redux'
import { allInitialState } from '../../constants/reducer'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'; 

type ProductItem = {
    product: Product
    display: string
}

type Props = {
    cardReducer: ProductItem
}


export default function PopUp() {
    
    const AMOUNT_FIXED = 1

    const data = useSelector((state:Props) => state.cardReducer)
    const [item, setItem] = useState<ProductItem | undefined>(undefined)
    const [amount, setAmount] = useState(1)
    const [size, setSize] = useState('')
    const [popUpDisplay, setPopUpDisplay] = useState(false)

    useEffect(() => {
        setItem(data)
        
     
    },[data, item])


    const addAmount = () => {
        setAmount(amount => amount + AMOUNT_FIXED)
    }

    const removeAmount = () => {
        setAmount(amount => amount - AMOUNT_FIXED)
    }


    const dispatch = useDispatch()

    function addBag(purchased: PurchasedProduct){
        dispatch(allActions.handbagAction.addingProductItem(purchased))
    }

    const calculatePurchases = (size:string, count:number) => {
        try{
            if(!size){
                toast.warn('Por favor, selecione o tamanho do produto.', {
                    className: 'toast',
                    autoClose: 2500,
                })
                throw new Error('Voce esqueceu de selecionar um tamnho ou quantidade')
            }

            const priceFormat = Math.round(parseFloat(data.product.actual_price.substr(2)))

            const purchases = {
                createAt: new Date(),
                name: data.product.name,
                image: data.product.image,
                size: size,
                style: data.product.style,
                count: count,
                actual_price: data.product.actual_price,
                totalPrice: priceFormat * count
            }

            setPopUpDisplay(true)
            addBag(purchases)

        }catch(e){
            
        }
    }

    const setStateModal = () => {
        setAmount(1)
        setSize('')
    }

    function close(){
        dispatch(allActions.carAction.selectProduct(
                allInitialState.INITIAL_CARD_STATE.product, 
                allInitialState.INITIAL_CARD_STATE.display
            )
        )
        setPopUpDisplay(false)
        setStateModal()
    }

    return(
        <S.Container display = {item?.display}>
            <S.Modal>
                <S.ImageLeft src={item?.product?.image} alt='Imagem a esquerda do produto selecionado'/>

                <S.Info>
                    <S.Title>{item?.product.name}</S.Title>
                    
                    <S.BoxColor >
                        <S.ColorImage>
                            <p><strong>Cor |</strong> {item?.product.color}</p>
                            <img src={item?.product?.image} alt='Uma pequena imagem do produto selecionado.'/>
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
                                    (<S.SizeItem onClick={() => setSize(item.size)} key={index} back='' disabled={false}>
                                        <input name='btn' id={`btn${index}`} type='radio'/>
                                        <label htmlFor={`btn${index}`}><p>{item.size}</p></label>
                                    </S.SizeItem>)
                            })}
                        </S.SizeList>
                        </S.SizeContainer>

                    <S.AmountBox>
                        <button onClick={removeAmount} disabled={amount <= 1}>-</button>
                        <div>
                            <span>{amount}</span>
                        </div>
                        <button onClick={addAmount}>+</button>
                        
                    </S.AmountBox>

                    <S.ButtonBox>
                        <button disabled={!amount} onClick={() => calculatePurchases(size, amount)}>Comprar</button>
                    </S.ButtonBox>

                    <CgCloseR onClick={close}>sair</CgCloseR>
                </S.Info>               
            </S.Modal>
            <ToastContainer/>
          <S.PopUpComfirmPurchase  toogleVisibility={popUpDisplay}>
              <S.PopUpBox>
                    <img src={item?.product?.image} alt='exemplo'/>
                    <div>
                        <h1>EXCELENTE ESCOLHA!</h1>
                        <h2>{item?.product.name}</h2>
                        <p>Seu produto foi adicionado em sua sacola.</p>
                        <button onClick={close}>
                            Continuar comprando
                        </button>
                    </div>
              </S.PopUpBox>
          </S.PopUpComfirmPurchase>
        </S.Container>
    )
}


