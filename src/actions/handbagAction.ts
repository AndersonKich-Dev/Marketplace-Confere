import { PurchasedProduct } from '../types/api'

const addingProductItem = (purchasedProduct:PurchasedProduct) => {
    return {
        type: 'ADDING_PRODUCT',
        purchasedProduct,
        
    }
}

const removeProductItem = (createAt:Date) => {

    return {
        type: 'REMOVE_PRODUCT',
        createAt
    }
}

export default { addingProductItem, removeProductItem }