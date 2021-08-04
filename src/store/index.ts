import { createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import ReduxPromise from 'redux-promise'

import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(ReduxPromise))

const persistor = persistStore(<any>store) 


export{ store, persistor }






