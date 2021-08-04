import { PurchasedProduct } from '../types/api'
import { actionTypes } from '../constants/reducer'

type ActionProps = {
    type: string
    purchasedProduct: PurchasedProduct
    createAt:Date
}

const INITIAL_STATE = {
    data: <PurchasedProduct[]>[]
}

const addingProductBag = (state = INITIAL_STATE, action:ActionProps) => {
    const { type, purchasedProduct} = action
    console.log('My Bag: '+ state.data)
    switch(type){
        case actionTypes.ADDING_PRODUCT:
            return {...state, data: [...state.data, purchasedProduct]}

        case actionTypes.REMOVE_PRODUCT:
            return {data: [...state.data.filter(a => a.createAt !== action.createAt)]}
            
        default:
            return state
    }
    
}

export default addingProductBag
