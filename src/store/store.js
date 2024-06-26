import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers/user.reducer.js'
import { storyReducer } from './reducers/story.reducer.js'
import { systemReducer } from './reducers/system.reducer.js'

const rootReducer = combineReducers({
    userModule: userReducer,
    systemModule: systemReducer,
    storyModule: storyReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)




