import { Product } from '../types/api'
import { actionTypes, allInitialState } from '../constants/reducer'

type ActionProps = {
    type: string
    product: Product
    display: string
}

const selectProduct = (state = allInitialState.INITIAL_CARD_STATE, action:ActionProps) => {
    const { type, product, display } = action
       
    switch(type){
        case actionTypes.SELECT_PRODUCT:
            return {product: product, display: display}
        default:
            return state
    }
}

export default selectProduct


