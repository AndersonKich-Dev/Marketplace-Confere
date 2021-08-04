import { combineReducers } from 'redux'
import addingProductItemReducer from './addingProductItemReducer'
import dbProductsReducer from './dbProductsReducer'

import cardReducer from './cardReducer'

const rootReducer = combineReducers({
    cardReducer,
    addingProductItemReducer,
    dbProductsReducer
})

export default rootReducer