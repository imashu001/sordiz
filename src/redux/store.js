import { watcher } from "./watcher"
import createSagaMiddleware from "redux-saga"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { authReducer } from "./reducers/authReducers"
const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
  adminState: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(watcher)

export default store