import { Product } from '../types/api'
import { actionTypes } from '../constants/reducer'
import database from '../db/db.json'

type ActionProps = {
    type: string
    productList: Product[]
}

const INITIAL_STATE = {
    data: database.products
}

const viewProducts = (state = INITIAL_STATE, action:ActionProps) => {
    const { type, productList } = action
    console.log(productList + 'productList')
    switch(type){
        case actionTypes.LIST_DB_PRODUCTS:
            return {...state, data: [...productList]}
        default:
            return state
    }
   
}

export default viewProducts

/*
..state, data: [...state.data, productList]}
*/