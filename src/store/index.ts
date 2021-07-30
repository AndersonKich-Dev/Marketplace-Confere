import { createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'

import rootReducer from '../reducers'


const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

export default store






