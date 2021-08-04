import { useEffect, useState } from 'react'
import * as S from './style'
import Card from '../Cards'
import { Product } from '../../types/api'
import allActions from '../../actions'
import database from '../../db/db.json'
import { useSelector,useDispatch } from 'react-redux'


export default function Main( ){

    const data:Product[] = useSelector((state:any) => state.dbProductsReducer.data)
    const CATEGORIES_CODE = 1 
    const [selectValue, setSelectValue] = useState('')

    const selectAccessoriesList = (code:number) => {
        let array =  
            [...database.products.filter(a => a.sizes.length === code)]
      addBag(array)
    }

    const selectClothingList = (code:number) => {
        let array =  
            [...database.products.filter(a => a.sizes.length > code)]
       addBag(array)
    }

    const  orderProductByPrice = (sort:string) => {
       const arry = [...database.products]

       if(sort === 'smaller'){
        arry.sort((a, b) => {
            if(Math.round(parseFloat(a.actual_price.substr(2))) > Math.round(parseFloat(b.actual_price.substr(2)))){
                return 1
            }
            if(Math.round(parseFloat(a.actual_price.substr(2))) < Math.round(parseFloat(b.actual_price.substr(2)))){
                return -1
            }
            else{
                return 0
            }
        })
       }
       else if(sort === 'large'){
        arry.sort((a, b) => {
            if(Math.round(parseFloat(a.actual_price.substr(2))) < Math.round(parseFloat(b.actual_price.substr(2)))){
                return 1
            }
            if(Math.round(parseFloat(a.actual_price.substr(2))) > Math.round(parseFloat(b.actual_price.substr(2)))){
                return -1
            }
            else{
                return 0
            }
        })
       }

        addBag(arry)
    }

    const dispatch = useDispatch()

    function addBag(productList:Product[]){
        dispatch(allActions.dbProductsAction.listDbProducts(productList))
    }

    useEffect(()=>{
        switch(selectValue){
            case 'smaller':
               return orderProductByPrice('smaller')
            case 'larger':
                return orderProductByPrice('larger')
            case 'favorite':
                return 
        }

        
    },[selectValue])

    return(
        <S.Container>
            <S.SelectBar>
                <form>
                    <select onChange={e => setSelectValue(e.target.value)}>
                        <option value="">Filtrar</option>
                        <option value="smaller">Menor preço</option>
                        <option value="larger" >Maior preco</option>
                        <option value="favorite">Favoritos</option>
                    </select>
                </form>

                <S.ModalityBox>
                    <button onClick={() => selectAccessoriesList(CATEGORIES_CODE)}>Acessórios</button>
                    <button onClick={()=>selectClothingList(CATEGORIES_CODE)}>Vestuário</button>
                </S.ModalityBox>
            </S.SelectBar>
            <S.Subcontainer>
                {data.map((item:Product, index:number)=>(
                <Card key={index} product={item}/>
            ))}
            </S.Subcontainer>
        </S.Container>
    )
}




