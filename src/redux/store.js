import {createStore} from 'redux'

import cardReducer from './reducer/cardReducer'
import rootReducer from './reducer/combinReducers'



const store =createStore(rootReducer)

export default store