import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import logger from 'redux-logger'

const middleware = [thunk,logger]
 const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))
 export type RootStore = ReturnType<typeof rootReducer>
 export default store