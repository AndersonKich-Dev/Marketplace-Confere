import { Product } from '../types/api'

const listDbProducts = (productList:Product[]) => {
    return {
        type: 'LIST_DB_PRODUCTS',
        productList,    
    }
}

export default {listDbProducts}