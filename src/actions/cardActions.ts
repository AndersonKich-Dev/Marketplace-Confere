import { Product } from '../types/api'

const selectProduct = (product:Product, display:string) => {
    return {
        type: 'SELECT_PRODUCT',
        product,
        display,
    }
}

export default { selectProduct }